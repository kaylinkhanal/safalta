const express=require('express')
const router=express.Router()
const User = require('../model/user')
const {addNewUser} = require('../controller/user')

router.post('/register', addNewUser)



  module.exports = router;
