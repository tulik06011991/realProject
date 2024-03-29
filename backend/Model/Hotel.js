const mongoose  = require('mongoose')



const HotelSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true

    },
    title: {
        type: String, 
        required: true

    },
    desc: {
        type: String, 
        required: true
        
    },
    price: {
        type: Number, 
        min: 0,
        max: 5

    },
    image:{
        type: String,
        required: true
    }
}) 

 const hotelModel =  mongoose.model('Hotel', HotelSchema)
 module.exports = hotelModel
