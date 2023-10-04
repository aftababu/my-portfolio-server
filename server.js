const express = require("express");
const app = express();
const dotenv = require("dotenv");
const assetsRoutes = require("./routes/assetsRoutes");
const projectRoutes = require("./routes/projectRoutes");
const { connectDb } = require("./config/connectionDb");
const cloudinary=require('cloudinary')
const fileUpload=require('express-fileupload');
const cors=require('cors')
const bodyParser = require("body-parser");
dotenv.config({ path: "my-portfolio-server/config/config.env" });
const port = process.env.PORT;
connectDb();

app.use(fileUpload({
  useTempFiles:true
}))
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.use(cors())

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({extended:false}))

app.use("/api/v1/assets", assetsRoutes);
app.use("/api/v1", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
