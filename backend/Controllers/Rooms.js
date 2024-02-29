const Rooms = require('../Model/Rooms')
const Hotel = require('../Model/Hotel')


const  createRooms = async(req, res) =>{
    const hotelId = req.params.hotelid;
    const newRooms = new Rooms(req.body)
    try {
        const saveRoom = await newRooms.save();

        try {
            
        } catch (error) {
            
        }
    } catch (error) {
        
    }
}