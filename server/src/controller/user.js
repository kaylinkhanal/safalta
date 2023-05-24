const User = require('../model/user')

const addNewUser = async(req, res) => {
    User.create(req.body)
   }

const deleteUser = async(req, res) => {
    console.log("test")
}

const getAllPassword = async(req, res) => {
    const data = await User.find()
    res.json({data: data})

}

module.exports = {
    addNewUser,
    deleteUser,
    getAllPassword
}