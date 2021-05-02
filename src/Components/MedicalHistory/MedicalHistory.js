import React from "react";
import { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import {simpleStorageAbi} from '../Abis/abi';
import Web3 from 'web3';
import { Link } from "@material-ui/core";

const web3 = new Web3(Web3.givenProvider);
const contractAdd = "0x157372faA321d5d8837A61A73e2186913693bA0a";
const SimpleContract = new web3.eth.Contract(simpleStorageAbi,contractAdd);


const MedicalHistory = () => {


const [age,setAge] = useState();
const [getAge,setGetAge] = useState();

const [dname,setdName] = useState("");
const [getdName,setGetdName] = useState("");

const [pname,setpName] = useState("");
const [getpName,setGetpName] = useState("");

const [medicine,setmedicine] = useState("");
const [getmedicine,setGetMedicine] = useState("");


const handleSet = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setAge(age).estimateGas();
    const gas1 = await SimpleContract.methods.setDName(dname).estimateGas();
    const gas2 = await SimpleContract.methods.setPName(pname).estimateGas();
    const gas3 = await SimpleContract.methods.setMedicine(medicine).estimateGas();


    const result = await SimpleContract.methods.setAge(age).send({ from: account, gas });
    const result1 = await SimpleContract.methods.setDName(dname).send({ from: account, gas1 });
    const result2 = await SimpleContract.methods.setPName(pname).send({ from: account, gas2 });
    const result3 = await SimpleContract.methods.setMedicine(medicine).send({ from: account, gas3 });
  
    console.log(result);
    console.log(result1);
    console.log(result2);
    console.log(result3);
  }

  const handleGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getAge().call();
    const result1 = await SimpleContract.methods.getDName().call();
    const result2 = await SimpleContract.methods.getPName().call();
    const result3 = await SimpleContract.methods.getMedicine().call();
  
    setGetAge(result);
    setGetdName(result1);
    setGetpName(result2);
    setGetMedicine(result3);
  }



   /* const history = useHistory();
    
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
    */
return(
     <div>
        <h4 align="center"> <b>Medical History </b></h4> 
        <form onSubmit={handleSet} className="History">
          <label>
            <h4> <b>Enter Patient Age: </b>
            <input type="text" name="name" value={age} onChange={ e => setAge(e.target.value) }  />
            </h4>
          </label>
          
          <label>
          <h4> <b>Enter Doctor Name: </b>
            <input type="text" name="name" value={dname} onChange={ e => setdName(e.target.value) }  />
            </h4>
          </label>
          
          <label>
          <h4> <b>Enter Patient Name: </b>
            <input type="text" name="name" value={pname} onChange={ e => setpName(e.target.value) }  />
            </h4>
          </label>

          <label>
          <h4> <b>Enter Medicine: </b>
            <input type="text" name="name" value={medicine} onChange={ e => setmedicine(e.target.value) }  />
            </h4>
          </label> 
      
          
          <input type="submit" value="Save Prescription" className="Sava" />
        </form>
        <br/>
        <button onClick={handleGet} type="button" className="Sava1">Show Prescription</button> <br/> <br/>
       
        <div className="Hist1">
        <div className="Main">
            <h1 id="op1">Patient EHR</h1>            
        </div>
        <div class="oop">
        <div>
            <h1 id="op2">Patient Name</h1>
            <h1>{getpName}</h1>
        </div>
        <hr class="hr0"></hr>
        <div>
           <h1 id="op3"User >Patient Age</h1>
         
           <h1>{getAge}</h1>
        </div>
        <hr class="hr1"></hr>
        <div>
            <h1 id="op4">Doctor Name</h1>
               
           <h1>{getdName}</h1>
        </div>
        <hr class="hr2"></hr>
        <div>
           <h1 id="op5">Medicine</h1>
               
           <h1>{getmedicine}</h1>
        </div>
        
        </div>
        </div>
        
     
       
      
        
    </div> 
         
);  
}
export default MedicalHistory