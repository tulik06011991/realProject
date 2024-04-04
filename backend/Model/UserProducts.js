// userProducts.js

const mongoose = require('mongoose');

// UserProducts schema
const userProductsSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
});

// UserProducts model
const UserProducts = mongoose.model('UserProducts', userProductsSchema);

module.exports = UserProducts;
