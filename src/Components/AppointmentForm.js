import React,{useEffect,useState} from 'react';
import './AppointmentForm.css'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';



function Appointmentform() {

  const history = useHistory();
 
   const [userData,setUserData] = useState({name:"",email:"",pnumber:"",gender:"",symptoms:"",date:"",time:""});
  //user authentication
  const callAboutPage = async() => {
    try{

      const res = await fetch('/getData',{
        method:"GET",
        headers:{
         
          "Content-Type": "application/json"
        },
        
      });

      const data = await res.json();
      //console.log(data);
      setUserData({...userData,name:data.name, email:data.email, pnumber:data.pnumber});

      if(res.status !==200)
      {
        const error = new Error(res.error);
        throw error;
      }
    }catch(err) {
            console.log(err);
            alert("Please sign in to continue");
            history.push("/signup");
            
    }
}


useEffect(() => {
callAboutPage();
}, [])

//to fill appointment details
const handleInputs = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     setUserData({...userData, [name]:value})
}
//send data to backend

const handleAppointment = async(e) => {
        e.preventDefault();
        const {name , email, pnumber, gender, symptoms, date, time} = userData;
        const res = await fetch('/appointmentform',{
          method:"POST",
          headers: {
             "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name , email, pnumber, gender, symptoms, date, time
          })
        });

        const data = await res.json();

        if(!data)
        {
          console.log("Appointment Failed");
        }

        else
        { 
          alert("Appointment Booked Successfully!!!");
          setUserData({...userData,gender:"", symptoms:"", date:"", time:""})
        }
}
/*  const history = useHistory();
  //for sign up
  
  const [user,setUser] = useState({
    name:"",
    email:"",
    pnumber:"",
    gender:"",
    symptom:"",
    date:"",
    time:""
  });

  let name, value;
  const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
            e.preventDefault();
            const { name, email , pnumber , gender , symptom , date , time } = user;

           const res = await fetch("/register" , {

              method: "POST",
              headers: {
                 "Content-Type" : "application/json"
              },

              body: JSON.stringify({
              name , email , pnumber , gender , symptom , date , time
              })

           });

           const data = await res.json();

           if(data.status == 422 || !data)
           {
             window.alert("Registration failed");
             console.log("Registration failed");
           }

           else
           {
            //swal("Congratulations", "Registration Successfull!");
            window.alert("Appointment Booked Successfully");
            console.log("Registration Successfull");

            history.push("/");

           } 
  }*/
  return (
  
    <div id="container" class="body5">
    
        <div id="body_header">
        <br/><br/><Link class="backbtn5" to="/diabetes">Back</Link>
                  <Link class="homebtn5" to="/home">MedTech</Link>
                <h1 class="apph1">Patient Appointment Form</h1>

        </div>
        <form  method="POST" class="form5">
      <fieldset class="fldset5">
        
        <label class="label5" for="name"> Patient Name</label>
        <input class="inp5" id="name" name="name" type="text"
         value={userData.name}
         onChange={handleInputs}
         />

        <label class="label5" for="mail">Email</label>
        <input class="inp5" type="email" id="email" name="email"
        value={userData.email}
        onChange={handleInputs}
        />

        <label class="label5" for="tel">Contact No</label>
        <input class="inp5" id="pno" name="pnumber" type="number"  autoComplete="off"
        value={userData.pnumber}
        onChange={handleInputs}/>
        
        <label class="label5" for="appointment_for"> Gender</label>
        <select class="slct5" id="gender" name="gender" value={userData.gender} onChange={handleInputs} >
          <option value="Sex">Select Your Gender</option>
		   <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>

        <label class="label5" for="appointment_description">Symptoms</label>
        <textarea class="textarea5" id="symptoms" name="symptoms" value={userData.symptoms}
        onChange={handleInputs} 
         ></textarea>
        <label class="label5" for="date">Date</label>
        <input class="inp5" type="date" name="date" value={userData.date} onChange={handleInputs} />
     
        <label class="label5" for="appointment_for"> Time</label>
        <select class="slct5" id="time" name="time" value={userData.time} onChange={handleInputs}>
          <option value="time">Select Appointment Time</option>
		   <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
      
        </select>
      
       
  </fieldset>
      <button class="bttn5" type="submit" onClick={handleAppointment} >Request For Appointment</button>
    </form>
    
       
    </div>



   
  );
}

export default Appointmentform;