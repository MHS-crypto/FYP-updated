const dotenv = require("dotenv");
const mongoose = require("mongoose");


const express = require('express');
const expressServer = express();

const cookieParser = require('cookie-parser');
expressServer.use(cookieParser());



dotenv.config({path:'./config.env'});
require('./DB/connection');

//User Schema
//const User = require('./Model/userSchema');

expressServer.use(express.json());

expressServer.use(require('./Router/auth'));
const PORT = process.env.PORT;



expressServer.get('/signin',(req,res)=>{
    res.send("Hello from sign in");
});

expressServer.get('/signup',(req,res)=>{
    res.send("Hello from server");
});

expressServer.get('/contact',(req,res)=>{
    res.send("Hello from server");
});

expressServer.get('/about',(req,res)=>{
    res.send("Hello from about server");
});

expressServer.get('/user',(req,res)=>{
    res.send("Hello from server");
})


expressServer.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});
