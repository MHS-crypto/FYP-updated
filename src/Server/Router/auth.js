const express = require("express");
const { models } = require("mongoose"); // to use mongo db library
const bcrypt = require("bcryptjs"); //to encrypt password in the DB
const jwt = require("jsonwebtoken"); // after login user should have a session using this tokken
const authenticate = require("../Middleware/authenticate");

const router = express.Router();


/*//Appointment

const Appointment = require("../Model/appointmentSchema");
router.get('/',(req,res) =>
{
  res.send("HELLO WORLD FROM SERVER auth");
});

//Using Async Await

router.post('/appointmentform',async (req,res)=>{
    // get data from the frontend
    const {name,email,pnumber,gender,symptom,date,time}= req.body;

      if(!name || !email || !pnumber || !gender || !symptom || !date || !time)
    
        {
            return res.status(422).json({error:"All fields must be filled" });

        }

    try {

     // const response  = await  Appointment.findOne({email:email});
      
        
        
        const user = new Appointment({ name, email, password, cpassword, pnumber, address });

         await user.save();

        res.status(201).json({message:"Appointment registered successfully" });

        
    
    }catch(err) {
        console.log(err);
    }
   
});

*/

//signUP
const User = require("../Model/userSchema");
router.get('/',(req,res) =>
{
  res.send("HELLO WORLD FROM SERVER auth");
});


//Using Async Await

router.post('/register',async (req,res)=>{
    // get data from the frontend
    const {name,email,password,cpassword,pnumber,address}= req.body;

      if(!name || !email || !password || !cpassword || !pnumber || !address)
    
        {
            return res.status(422).json({error:"All fields must be filled" });

        }

    try {

      const response  = await  User.findOne({email:email});
      
      if(response)
        {
            return res.status(422).json({error:"Email already exsist" });

        }

        else if(password != cpassword)
        {
            return res.status(422).json({error:"Password and Confirm Password should be same" });
        }

        else
        {
        const user = new User({ name, email, password, cpassword, pnumber, address });

         await user.save();

        res.status(201).json({message:"User registered successfully" });

        }
    
    }catch(err) {
        console.log(err);
    }
   
});

//login rout
router.post('/signin',async(req,res)=> {
   // console.log(req.body);
   // res.json({message:"Awsome"});

   try 
   {
        const {email,password} = req.body;
        if(!email || !password)
            {
                return res.status(400).json({error:"Email & Password should not be empty"});
            }

        const userLogin = await User.findOne({email:email});

        if(userLogin)
        { 
            
            const isMatch = await bcrypt.compare(password,userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {

                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });


            if(!isMatch)
                {
                res.status(400).json({error:"Invalid Password"});
                }

            else 
                {
                    res.json({message:"Mubarak ho bhae"});

                }

        }

        else
            {
                res.status(400).json({error:"Invalid Email"});

            }

       
        console.log(userLogin);
   } catch (err) {
       console.log(err);
   }
});

//MiddleWare
router.get('/patientdashboard',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.get('/getData', authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.post('/appointmentform',authenticate, async (req,res)=>{
    try{
            const {name, email, pnumber, gender, symptoms, date, time} = req.body;
            if(!name || !email || !pnumber || !gender || !symptoms || !date|| !time)
            {
                console.log("Error in Appointment form");
                return res.json({error:"Appointment failed"});
            }

            const userAppointment = await User.findOne({_id:req.userID });
            
            if(userAppointment)
            {
                const userMessage = await userAppointment.addAppointment(name,email,pnumber,gender,symptoms,date,time)
                await userAppointment.save();

                res.status(201).json({message:"Appointment Booked by user Successfully"});
            }
    }catch(error){
            console.log(error);
    }
});

module.exports = router;