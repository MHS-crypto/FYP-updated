import React from "react";
import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import "./Aboutme2.css";

const About = () => {

        const history = useHistory();
    
    const [userData,setUserData] = useState({});
    //user authentication
    const callAboutPage = async() => {
        try{

        const res = await fetch('/patientdashboard',{
            method:"GET",
            headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        //console.log(data);
        setUserData(data);

        if(await res.status !==200)
        {
            const error = new Error(res.error);
            throw error;
        }
        }catch(err) {
                console.log(err);
                history.push("/signup");
        }
    }


    useEffect(() => {
    callAboutPage();
    }, [])
    //finish here
    
    return (
    <div  class="tbll2">
    <br/>
        <div>
            <h1 id="op1">About Me</h1>            
        </div>
        <div class="oop">
        <div>
            <h1 id="op2">User id</h1>
            <h1>{userData._id}</h1>
        </div>
        <hr class="hr0"></hr>
        <div>
           <h1 id="op3"User >Name</h1>
         
           <h1>{userData.name}</h1>
        </div>
        <hr class="hr1"></hr>
        <div>
            <h1 id="op4">Email</h1>
               
           <h1>{userData.email}</h1>
        </div>
        <hr class="hr2"></hr>
        <div>
           <h1 id="op5">Phone No</h1>
               
           <h1>{userData.pnumber}</h1>
        </div>
        <hr class="hr3"></hr>
        <div>
           <h1 id="op6">Address</h1>
        
           <h1>{userData.address}</h1>
        </div>

        </div>
            
        
    </div> 
         
);  
}
export default About