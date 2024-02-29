const mongoose  = require('mongoose')



const RoomSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
      

    },
    price: {
        type: Number, 
        required: true,
        

    },
    maxPeople: {
        type: Number, 
        required: true,
        

    },
   
    desc: {
        type: String, 
        required: true

    },
   
    roomNumbers: [],
   
},{timestamps: true}) 

 const RoomsModel =  mongoose.model('Rooms', RoomSchema)
 module.exports = RoomsModel
