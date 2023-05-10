const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: String
});

const Product = mongoose.model('Product', productSchema);
exports.default = Product
