const Item = require('../model/item')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const path =require('path')
const addNewItem = async(req, res) => {
        try{
            console.log(req.body)
        //   const data = new Item(req.body)
        // data.save()
        
        //one way to append to an object
        // const dataWithFileName = {...req.body, "Item Image" :req.file.filename }
        req.body['Item Image'] = req.file.filename
        const data = await Item.create(req.body)
        if(data){
            res.json({
                msg: 'item created successfully'
            })
        }
        }catch(err){
            console.log(err)
        }
   

   }
 
   const getAllItems = async(req, res) => {
       console.log(req.query)
    const itemCount = await Item.find().count()  //6
    const pageCount = Math.ceil(itemCount/5) //2
    const skipRange = (req.query.page -1) * 5
    const data = await Item.find({}).skip(skipRange).limit(5)
    if(data){
       res.json({
        itemList: data,
        pageCount: pageCount
       })
    }
 
 }

 const getImageById= async(req, res) => {

    const data = await Item.findById(req.params.id)
    const imgName = data['Item Image']
    const imgPath = path.join(__dirname, '../../uploads/items', imgName)
    res.sendFile(imgPath)
  

 }

module.exports = {
    addNewItem,
    getAllItems,
    getImageById
}