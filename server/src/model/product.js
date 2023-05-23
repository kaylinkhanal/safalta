const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  address: String
});


module.exports = mongoose.model('User', UserSchema);



