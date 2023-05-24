const User = require('../model/user')

const addNewUser = async(req, res) => {
        try{
            const data= await User.create(req.body)
            if(data) {
                res.json({
                    msg: "registered successfully"
                })
            }
        }catch(err){
            console.log(err)
        }
   

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