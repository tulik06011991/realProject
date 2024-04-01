const mongoose = require('mongoose');
const Product = require('../Model/Product')



const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  purchasedProducts: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Mahsulotlar uchun murojaat
    purchaseDate: { type: Date, default: Date.now } // Sotib olgan vaqt
  }]
});

const User = mongoose.model('User', userSchema);


module.exports = { User };
