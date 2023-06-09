const express=require('express')
const router=express.Router()
const multer  = require('multer')

const {addNewItem, getAllItems, getImageById} = require('../controller/item')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/items/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post('/items',upload.single('itemImage'), addNewItem)
router.get('/items', getAllItems)
router.get('/item-image/:id', getImageById)


  module.exports = router;
