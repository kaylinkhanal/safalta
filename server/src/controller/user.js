const User = require('../model/user')
const bcrypt = require('bcrypt')
const addNewUser = async(req, res) => {
        try{
            //search if the user is in the db
            const userExists = await User.exists({email: req.body.email})
            if(!userExists){
                const hash = bcrypt.hashSync(req.body.password, 10);
                req.body.password = hash
                const data= await User.create(req.body)
                if(data) {
                    res.json({
                        msg: "registered successfully"
                    })
                }
            }else{
                res.sendStatus(409)
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