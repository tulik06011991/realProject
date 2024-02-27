const express= require('express')
const router = express.Router()
const register = require('../Controllers/Auth')


<<<<<<< HEAD
router.post("/" , register )
=======
router.post("/", (req, res) =>{
    res.send(`salom get`)
})
>>>>>>> 22e7df7a7808cc9f088f1dd17b1d7ee39092fa51

router.post("/" , login )





module.exports = router