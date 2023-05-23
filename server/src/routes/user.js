const express=require('express')
const router=express.Router()
const User = require('../model/user')
router.post('/register', async(req, res) => {
   User.create(req.body)
 
 })

 router.post('/login', async(req, res) => {
   User.create(req.body)
 })
router.post('/users', async(req, res) => {
   User.create(req.body)
 
 })
 router.post('/register', async(req, res) => {

  // console.log(req.body)
  res.send('success')
  // User.create(req.body)

})

  module.exports = router;
