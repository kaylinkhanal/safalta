const express=require('express')
const router=express.Router()
const {Product} = require('../model/user')

router.post('/users', async(req, res) => {
  const data = await User.create(req.body)
 })

 router.get('/users/:id', async(req, res) => {
    console.log(req.body)
    console.log(req.params)
 })

 router.delete('/users/:id', async(req, res) => {
    const data= await User.findByIdAndDelete(req.params.id)
  })

 router.put('/change-pass/:id', async(req, res) => {
    const data= await User.findByIdAndUpdate(req.params.id, req.body)
  })
  
  module.exports = router;
