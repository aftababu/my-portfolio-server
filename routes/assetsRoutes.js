const express=require('express')
const router=express.Router()
const {getSkillsIcons,postSkillsIcons, getClientMail, postClientMail}=require('../controllers/assetsControllers')


router.route('/skillsIcon').get(getSkillsIcons).post(postSkillsIcons)
router.route('/mail').get(getClientMail).post(postClientMail)



module.exports=router