const express=require('express')
const { getProjects, postProjects } = require('../controllers/projectsControllers')
const router=express.Router()


router.route('/project').get(getProjects).post(postProjects)


module.exports=router