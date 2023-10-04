const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    icon:{
        type:String,
        required:[true, "Please Enter icon link"],
        trim:true
    },
    title:{
        type:String,
        required:[true, "Please Enter icon title"],
        trim:true
    }
})

module.exports=mongoose.model('skillsIcon',skillsSchema)