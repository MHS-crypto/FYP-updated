import React,{useState} from 'react';
import './Signup.css';
import {useHistory,Link} from 'react-router-dom';
import img3 from './Images/Hos1.jpg';




function Signup() {
  
  const signhistory = useHistory();
//for sign in

const [email,setEmail]  = useState("");
const [password,setPassword] = useState("");

const loginUser = async (e) => {

        e.preventDefault();
       const res = await fetch('/signin',{

          method: "POST",
          headers : {
            "Content-Type": "application/json"
          },

          body:JSON.stringify({
            email,
            password
          })
       });

       const data = res.json();

       if(res.status == 400 || !data)
       {
         window.alert("Invalid Credentials");
       }

       else
       {
         window.alert("Login Successfull");
         signhistory.push('/patientdashboard');
       }
}



  //for sign up
  const history = useHistory();
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    pnumber:"",
    address:""
  });

  let name, value;
  const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
            e.preventDefault();
            const { name , email , password , cpassword , pnumber , address } = user;

           const res = await fetch("/register" , {

              method: "POST",
              headers: {
                 "Content-Type" : "application/json"
              },

              body: JSON.stringify({
              name , email , password , cpassword , pnumber , address
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
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            history.push("/");

           }
  }
       

  return (
    <div class="bod1" class="bgimg1" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${img3})`}} >
         <div class="login-wrap" >
            <div class="login-html" >
                <input id="tab-1" type="radio" name="tab" class="sign-in" /><label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                <form class="sign-in-htm"  method="POST">
                    <div class="group">
                    <label for="user" class="label">EMAIL</label>
                    <input id="email" name="email" type="email" class="input"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div class="group">
                    <label for="pass" class="label">Password</label>
                    <input id="password" name="password" type="password" class="input" data-type="password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                    </div>

                    <div class="group">
                    <input id="check" type="checkbox" class="check" checked/>
                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                   {/* <Link to="/patientdashboard">      </Link> */}
                   <input type="submit" class="button" value="Sign In"
                   onClick ={loginUser}
                   /> 
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                    <label for="tab-2" class="forget">Forget Password!</label>
                    </div>
                </form>
                <form class="sign-up-htm"  method="POST">
                    <div class="group">
                    <label for="user" class="label">Username</label>
                    <input id="name" name="name" type="text" class="input" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    />
                    </div>
                    
                    <div class="group">
                    <label for="pass" class="label">Email</label>
                    <input id="email" name="email" type="email" class="input" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    />
                    </div>
                    <div class="group">
                    <label for="pass" class="label">Password</label>
                    <input id="password" name="password" type="password" class="input" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    />
                    </div>

                    <div class="group">
                    <label for="pass" class="label"> Confirm Password</label>
                    <input id="cpassword" name="cpassword" type="password" class="input" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    />
                    </div>

                    <div class="group">
                    <label for="pass" class="label">Phone No</label>
                    <input id="pno" name="pnumber" type="number" class="input" autoComplete="off"
                    value={user.pnumber}
                    onChange={handleInputs}
                    />
                    </div>
                    
                    <div class="group">
                    <label for="pass" class="label">Address</label>
                    <input id="address" name="address" type="text" class="input"
                    value={user.address}
                    onChange={handleInputs}
                    />
                    </div>
                    <div class="group">
                    <input type="submit" class="button" value="Sign Up" name="signup" id="signup"
                    onClick={PostData}
                    />
                    </div>
                   {/* <div class="hr"></div>
                    <div class="foot-lnk">
                    <label for="tab-1" class="forget">Already Member?</label>
                    </div> */}
                </form>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Signup;