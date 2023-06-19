const express=require('express')
const router=express.Router()
const User = require('../model/user')
const {addNewUser,verifyUser, getAllUsers} = require('../controller/user')


router.post('/register',  addNewUser)
router.post('/login', verifyUser)
router.get('/users', getAllUsers)



  module.exports = router;
