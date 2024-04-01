const mongoose = require('mongoose');
const Product = require('../Model/Product')


// Mahsulot modeli
const productSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true
},
  price:{ 
    type : Number,
    required: true
},
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } // Kategoriyaga murojaat
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Category, Product };
