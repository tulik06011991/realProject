// const HotelData = require("../Model/Hotel")

// const createHotel = async(req,res) =>{
//     const hotelData = new HotelData(req.body)
//     try {
//         const SaveHotel = await HotelData.create(hotelData)
//         res.status(201).json(SaveHotel)
        
//     } catch (error) {
//         console.log(error),
//         res.status(500).json({msg: error})
        
//     }
// }

// const  updateHotel = async(req,res) =>{
//     try {
//         const updateHotel = await HotelData.findByIdAndUpdate(req.params.id, req.body)
//         res.status(200).json(updateHotel)
        
//     } catch (error) {
//         console.log(error),
//         res.status(500).json({msg: error})
//     }
// }


// const getAllHotel = async(req,res) =>{
//     try {
//         const allHotel = await HotelData.find()
//         res.status(200).json(allHotel)

        
//     } catch (error) {
//         console.log(error),
//         res.status(500).json({msg: error})
//     }
// }


// const getIdHotel = async(req, res) =>{
//     try {
//         const getHotel = await HotelData.findById(req.params.id)
//         res.status(200).json(getHotel)
//     } catch (error) {
//         console.log(error),
//         res.status(500).json({msg: error})
//     }
// }


// const deleteHotel = async(req, res) =>{
//     try {
//         const deleteHotel = await HotelData.findByIdAndDelete(req.params.id)
//         res.status(200).json(` o'chirildi`)
        
//     } catch (error) {
//         console.log(error),
//         res.status(500).json({msg: error})
        
//     }
// }


// module.exports = {
//     createHotel,
//     updateHotel,
//     deleteHotel,
//     getAllHotel,
//     getIdHotel

    
// }