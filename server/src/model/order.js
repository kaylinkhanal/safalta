const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  pickupAddress: String,
  pickupCoordinates: {type: Object},
  receiverAddress: String,
  receiverCoordinates: {type: Object},
  formDetails: {type: Object},
  senderId: String,
});




module.exports = mongoose.model('Order', orderSchema);



