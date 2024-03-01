const Rooms = require('../Model/Rooms')
const Hotel = require('../Model/Hotel')

const createRooms = async(req,res) =>{
    const Rooms = new Rooms(req.body)
    try {
        const SaveRooms = await Rooms.create(hotelData)
        res.status(201).json(SaveRooms)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
}

const  updateRooms = async(req,res) =>{
    try {
        const updateRooms = await Rooms.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updateRooms)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const getAllRooms = async(req,res) =>{
    try {
        const allRooms = await Rooms.find()
        res.status(200).json(allRooms)

        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const getIdRooms = async(req, res) =>{
    try {
        const getRooms = await Rooms.findById(req.params.id)
        res.status(200).json(getRooms)
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const deleteRooms = async(req, res) =>{
    try {
        const deleteHotel = await Rooms.findByIdAndDelete(req.params.id)
        res.status(200).json(` o'chirildi`)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
}


module.exports = {
    createRooms,
    getIdRooms,
    getAllRooms,
    updateRooms,
    deleteRooms

    
}