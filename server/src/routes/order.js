const express=require('express')
const router=express.Router()
const multer  = require('multer')

const {addNewOrders} = require('../controller/order')

router.post('/orders', addNewOrders)


  module.exports = router;
