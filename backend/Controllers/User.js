const UserData= require("../Model/Hotel")

const createUser = async(req,res) =>{
    const Userdata= new UserData(req.body)
    try {
        const SaveUser = await UserData.create(Userdata)
        res.status(201).json(SaveUser)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
}

const  updateUser = async(req,res) =>{
    try {
        const updateUser = await UserData.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updateUser)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const getAllUser = async(req,res) =>{
    try {
        const getAllUser = await UserData.find()
        res.status(200).json(getAllUser)

        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const getIdUser = async(req, res) =>{
    try {
        const getUser = await UserData.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}


const deleteUser = async(req, res) =>{
    try {
        const deleteuser = await UserData.findByIdAndDelete(req.params.id)
        res.status(200).json(` o'chirildi`)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser

    
}