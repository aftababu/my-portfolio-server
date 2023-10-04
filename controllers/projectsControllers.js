const Project = require("../models/projectsmodels");
const AsyncHandler = require("../middleware/AsyncHandler");
const cloudinary = require("cloudinary").v2;

exports.getProjects = AsyncHandler(async (req, res, next) => {
  const { category } = req.query;
  let filter = {};

  // Check if the "category" query parameter is provided
  if (category) {
    filter.category = category;
  }

  // Use Mongoose to find projects with optional category filter
  const projects = await Project.find(filter);

  if (!projects || projects.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No projects found" });
  }
  res.status(200).json({
    success: true,
    projects,
  });
});
exports.postProjects = AsyncHandler(async (req, res, next) => {
  const files = req.files.photo;
  console.log(req.body);
  const myCLoud = await cloudinary.uploader.upload(files.tempFilePath, {
    folder: "myportfolio",
  });
  const { projectsLink, projectDescription, category } = req.body;
  const projects = await Project.create({
    projectsLink,
    projectDescription,
    category,
    projectsImage: {
      public_id: myCLoud.public_id,
      url: myCLoud.secure_url,
    },
  });
  res.status(201).json({
    success: true,
    projects,
  });
});
