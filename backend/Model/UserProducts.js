// userProducts.js

const mongoose = require('mongoose');

// UserProducts schema
const userProductsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
});

// UserProducts model
const UserProducts = mongoose.model('UserProducts', userProductsSchema);

module.exports = UserProducts;
