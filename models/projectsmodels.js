const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  projectsLink: {
    type: String,
    required: [true, "Please Enter project link"],
    trim: true,
  },
  projectDescription: {
    type: String,
    required: [true, "Please Enter project title"],
    trim: true,
  },
  projectsImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  category:{
    type: String,
    required: [true, "Please Enter project category"],
  }
});

module.exports = mongoose.model("projects", projectsSchema);
