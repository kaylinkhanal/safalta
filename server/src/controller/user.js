const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const addNewUser = async(req, res) => {
    try{
        const userExists = await User.find({$or:[{email:  req.body.email}, {userName: req.body.userName}, {phoneNumber:req.body.phoneNumber}]})
        if(userExists.length == 0 ){
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

const verifyUser = async(req, res) => {
    //find if the user exists
   const data = await User.findOne({$or:[{email:  req.body.email}, {userName: req.body.userName }, {phoneNumber:req.body.phoneNumber}]})
   if(data){
       //db password ---->compare------> 
        const isMatched =await bcrypt.compare(req.body.password, data.password); // false
        //generate a jwt token for him
        const {password, ...allOtherItem} = req.body
        const token = await jwt.sign(allOtherItem, process.env.SECRET_KEY, { expiresIn: '12h'  });
        if(isMatched && token){
            res.json({
                msg: "login success",
                isLoggedIn: true,
                token: token,
                id: data._id,
                role: data.role,
                firstName: data.firstName
            })
            
            // const {password, ...remainingDetails} = data
            // res.json({
            //     ...remainingDetails,
            //     msg: "login success",
            //     isLoggedIn: true,
            //     token: token
            // })
        }else{
            res.json({
                msg: "login failed",
                isLoggedIn: false
            })
        }
      
   }else{
    res.json({
        msg: "invalid credentials",
        isLoggedIn: false
    })
   }

}


const getAllUsers = async(req, res) => {
    const data = await User.find()
    if(data){
       res.json({
        userList: data
       })
    }
 
 }
 
 


module.exports = {
    addNewUser,
    verifyUser,
    getAllUsers
}