const mongoose = require('mongoose');
const  User  = require('./Mahsulotlar');


const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  purchasedProducts: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Mahsulotlar uchun murojaat
    purchaseDate: { type: Date, default: Date.now } // Sotib olgan vaqt
  }]
});

const Users = mongoose.model('User', userSchema);

module.exports =  Users ;

