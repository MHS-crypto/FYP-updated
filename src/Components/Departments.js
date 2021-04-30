import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './Departments.css';

import img1 from './Images/1.PNG';
import img2 from './Images/2.PNG';
import img3 from './Images/3.PNG';
import img4 from './Images/4.PNG';
import img5 from './Images/5.PNG';
import img6 from './Images/6.PNG';
import img7 from './Images/7.PNG';
import img8 from './Images/8.PNG';

function Departments() {
  return (
    
    
    <div class="all" id="move">
        <h1 align="center" class="h1a">Choose Department</h1>
            <div class="depp">
            
               <Link to="/Gynacologist"> <img class="im1" src={img1}/></Link>  
               <Link to="/Skin"> <img class="im2" src={img2}/> </Link>                   
               <Link to="/Child"> <img class="im3" src={img3}/> </Link>             
               <Link to="/ENT"><img class="im4" src={img4}/> </Link>
               <br/>       
               <Link to="/Orthopadic"><img class="im5" src={img5}/></Link>
               <Link to="/Diagnostics"> <img class="im6" src={img6}/> </Link>              
               <Link to="/Diabetes"><img class="im7" src={img7}/> </Link>               
               <Link to="/Eye"><img class="im8" src={img8}/></Link>
               
            </div>      
    </div>
  );
}

export default Departments;