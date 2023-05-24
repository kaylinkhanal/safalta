const express=require('express')
const router=express.Router()
const User = require('../model/user')
const {addNewUser,getAllPassword} = require('../controller/user')

router.post('/register', addNewUser)
router.get('/password', getAllPassword)



  module.exports = router;
