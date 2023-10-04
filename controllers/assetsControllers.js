const AsyncHandler = require("../middleware/AsyncHandler");
const SkillsIcon = require("../models/skillsIconModel");
const nodemailer = require("nodemailer");
exports.getSkillsIcons = AsyncHandler(async (req, res,next) => {
  const icons = await SkillsIcon.find();
  res.status(200).json({ success: true, icons });
});

exports.postSkillsIcons =AsyncHandler(async (req, res,next) => {
  const icons = await SkillsIcon.create(req.body);
  res.status(201).json({
    success: true,
    icons,
  });
});

exports.getClientMail=AsyncHandler(async(req,res,next)=>{
  
})


exports.postClientMail=AsyncHandler(async(req,res,next)=>{
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE, // E.g., Gmail, SMTP server, etc.
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const { name, email, message,subject } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nsubject: ${subject}\nMessage: ${message}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.error("Error sending email: ", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // console.log("Email sent: ", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
})

// exports.module= {getSkillsIcons,postSkillsIcons}
