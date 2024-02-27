const mongoose  = require('mongoose')



const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true

    },
    type: {
        type: String, 
        required: true

    },
   
    city: {
        type: String, 
        required: true

    },
    address:{
        type: String, 
        required: true
        
    },
    distance: {
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
   
    cheapertPrice:{
        type: Number,
        required: true
    },
    featured: {
        type: Boolean, 
        default : false

    },
   
}) 

 const hotelModel =  mongoose.model('Hotel', userSchema)
 module.exports = hotelModel
