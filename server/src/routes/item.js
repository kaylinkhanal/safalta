const express=require('express')
const router=express.Router()
const multer  = require('multer')

const {addNewItem, getAllItems} = require('../controller/item')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/items/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post('/items',upload.single('avatar'), addNewItem)
router.get('/items', getAllItems)


  module.exports = router;
