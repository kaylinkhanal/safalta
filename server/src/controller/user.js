const User = require('../model/user')

const addNewUser = async(req, res) => {
    User.create(req.body)
   }

const deleteUser = async(req, res) => {
    console.log("test")
}

module.exports = {
    addNewUser,
    deleteUser
}