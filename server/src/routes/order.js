const express=require('express')
const router=express.Router()
const User = require('../model/user')
router.post('/products', async(req, res) => {
   Product.create(req.body)
 
 })

 router.get('/login', async(req, res) => {
   User.create(req.body)
 
 })
 
router.post('/register', async(req, res) => {
   User.create(req.body)
 
 })

  module.exports = router;
