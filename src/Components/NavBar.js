import React from 'react';
import './NavBar.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Signup from './Signup';

function NavBar() {
  return (   
    
    <div>
        <div class="menue-bar" id="top">
         <Switch>
            <ul>
            <li class="active1" id="home"><Link to="/home">MedTech</Link></li> 
            <li><a href="#move"> <i class="fa fa-ellipsis-v" > </i>Hospitals</a>

            <div class="sub-menue1">
	            <ul>
	                <li class="hover-me"> <a href="#move"> PIMS Hospital </a> 

	                </li>

	                <li class="hover-me"> <a href="#move"> Cantt General Hospital </a>  
	   
	                </li>

	                <li class="hover-me"> <a href="#move"> District Headquarter Hospital </a> 
                    </li>    

                    <li class="hover-me"> <a href="#move"> Holy Family Hospital </a> 
                    </li>    

                    <li class="hover-me"> <a href="#move"> Benazir Bhutto Shaheed Hospital </a> 
                    </li>    
	            </ul>
	        </div>
            </li>

            <li><Link to="/aboutus"><i class="fa fa-user" > </i> About Us </Link>

            <div class="sub-menue1">
	            <ul>
                    <li> <Link to="/aboutus"> Our Team </Link> </li>
	                <li> <a href="#About"> Vision </a> </li>
	                <li> <a href="#About"> Mission </a> </li>
	            </ul>
	        </div>
            </li>
            <li> <Link to="/aboutus"><i class="fa fa-phone" > </i>Contact </Link> </li> 
            <li><Link to="/signup"><i class="fa fa-user-plus" > </i>Signup </Link></li>
            <li><Link to="/Login"><i class="fa fa-sign-in" > </i>Admin Login </Link> </li>
        </ul>
        </Switch>
    </div>
    </div>
  );
}

export default NavBar;
