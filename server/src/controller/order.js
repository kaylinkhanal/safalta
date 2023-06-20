const Order = require('../model/order')
const addNewOrders = async(req, res) => {
    try{
    //   const order =new Order(req.body)
    //   order.save()
    const res = await Order.create(req.body.formInputs)
   }catch(err){

   }
}
 
module.exports = {
    addNewOrders,
}