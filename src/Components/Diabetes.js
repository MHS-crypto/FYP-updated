import React from 'react';
import img1 from './Images/doc4.jpg';
import img2 from './Images/doc5.jpg';
import img3 from './Images/doc6.jpg';
import img4 from './Images/Hos1.jpg';
import './Gynacologist.css';
import {Link} from 'react-router-dom';

function Diabetes() {
  return (
  
    <div class="bgimg" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${img4})`}}  >
        <br/> <br/> <br/>
        <Link class="homebtn6" to="/home">MedTech</Link>  
    <div class="card-container"  >
    
    <img
        class="round"
       src={img1}
        alt="user"
    />
    <h1  id="hh">Dr Zoya Khan</h1>
    <h3  id="hhh">Pakistan</h3>
    <p id="ppp">
        <b>Medical Specialist <br />
        General Sergon</b>
    </p>
    
    <div class="buttons">
    <Link to="/appointmentform">
        <button class="primary">
            Call Now
        </button>
        <button class="primary ghost">
           Make Appointment
        </button>
    </Link>
    </div>
    <div class="skills">
    <h3 id="qual">Qualification</h3><br/>
        <ul>
            <li>MBBS</li>
            <li>Surgery Courses</li>
            <li>Intenships</li>
            <li>Therapy Doplama</li>
            <li>Surgical Experience</li>
        </ul>
    </div>
</div>

<br/> <br/> 

<div class="card-container">
    
    <img
        class="round"
       src={img2}
        alt="user"
    />
    <h1  id="hh">Dr Maham Altaf</h1>
    <h3  id="hhh">Pakistan</h3>
    <p id="ppp">
        <b>Medical Specialist <br />
        General Sergon</b>
    </p>
    <div class="buttons">
    <Link to="/appointmentform">
        <button class="primary">
            Call Now
        </button>
        <button class="primary ghost">
           Make Appointment
        </button>
    </Link>
    </div>
    <div class="skills">
    <h3 id="qual">Qualification</h3><br/>
        <ul>
            <li>MBBS</li>
            <li>Surgery Courses</li>
            <li>Intenships</li>
            <li>Therapy Doplama</li>
            <li>Surgical Experience</li>
        </ul>
    </div>
</div>
<br/>
<br/>

<div class="card-container">
    
    <img
        class="round"
       src={img3}
        alt="user"
    />
    <h1  id="hh">Dr Nazima Rehman</h1>
    <h3  id="hhh">Pakistan</h3>
    <p id="ppp">
        <b>Medical Specialist <br />
        General Sergon</b>
    </p>
    <div class="buttons">
    <Link to="/appointmentform">
        <button class="primary">
            Call Now
        </button>
        <button class="primary ghost">
           Make Appointment
        </button>
    </Link>
    </div>
    <div class="skills">
    <h3 id="qual">Qualification</h3><br/>
        <ul>
            <li>MBBS</li>
            <li>Surgery Courses</li>
            <li>Intenships</li>
            <li>Therapy Doplama</li>
            <li>Surgical Experience</li>
        </ul>
    </div>
</div>
<br/>
<br/>

</div> 
   
  );
}

export default Diabetes;
