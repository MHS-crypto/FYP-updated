import "./Main.css";
import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';

import hello from "../../assets/hello.svg";

const Main = () => {

  
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
    <main>
      <div className="main__container">
        <form method="GET">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {userData.name}</h1>
            <p>Welcome to your Patient Dashboard</p>
          </div>
        </div>
        </form>

        {/* <!-- MAIN TITLE ENDS HERE --> */}
       
      </div>
    </main>
  );
};

export default Main;
