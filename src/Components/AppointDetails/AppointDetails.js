import React from "react";
import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';





const ApointDetails = () => {



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
        console.log(data);
        console.log(data.appointments);
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

    

    
return(
     <div>
        <h1>Appointment Details</h1> 
      
    </div> 
         
);  
}
export default ApointDetails