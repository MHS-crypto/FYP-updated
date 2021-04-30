import React from 'react';
import './AdminLogin.css';

import img1 from './Images/c.jpg';

function Login() {
  return (
  
    <div class="bod" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${img1})`}}>

<div class="box">
	<h1>Login Here</h1>
	<form>
		<input type="text" name="" placeholder="Enter Username"/>
		<input type="password" name="" placeholder="Enter Password"/>
		<input type="submit" name="" value="Login"/>
		<a href="#">Forgot Password</a>
	</form>	
</div>
            
    </div>
   
  );
}

export default Login;