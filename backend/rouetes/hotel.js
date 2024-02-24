const express= require('express')
const router = express.Router()
const HotelData = require("../Model/Hotel")


router.post("/" , async (req, res) =>{
    
    
    const hotelData = new HotelData(req.body)
    try {
        const SaveHotel = await hotelData.save()
        res.status(201).json(SaveHotel)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
})

router.put("/" , async(req, res) =>{
    try {
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
})

router.delete("/" , (req, res) =>{
    try {
        
    } catch (error) { console.log(error),
        res.status(500).json({msg: error})
        
    }
})


router.put("/" , (req, res) =>{
    res.send(`salom get`)
})


router.delete("/" , (req, res) =>{
    res.send(`salom get`)
})




module.exports = router