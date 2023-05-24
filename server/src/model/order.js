const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  password: {type: String, required: true},
  address: String,
  userName: String,
  phoneNumber: String,
  email: String,
});


module.exports = mongoose.model('User', UserSchema);



