const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const authRoute = require('./rouetes/auth')
const users = require('./rouetes/users')
const admin = require('./rouetes/AdminRoutes')
const cookieParser = require('cookie-parser')


app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))
app.use(cookieParser())
app.use(express.json())
app.use('/auth' , authRoute)
app.use('/users', users)
app.use('/admin', admin)




mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log(`mongodb atlas connected`)
}).catch((error) =>{
    console.log( error, `mongodb atlas not connected`)
})

mongoose.connection.on('disconnected', () =>{
    console.log(`disconnected`);
});






const PORT = process.env.PORT || 8800;

app.listen(PORT, () =>{
    console.log(`server connected on port ${PORT}`);
});
