const express= require('express')
const router = express.Router()


router.post("/", (req, res) =>{
    res.send(`salom get`)
})

router.get("/" , (req, res) =>{
    res.send(`salom get`)
})

router.get("/" , (req, res) =>{
    res.send(`salom get`)
})

router.get("/register" , (req, res) =>{
    res.send(`salom register`)
})


router.put("/" , (req, res) =>{
    res.send(`salom get`)
})


router.delete("/" , (req, res) =>{
    res.send(`salom get`)
})




module.exports = router