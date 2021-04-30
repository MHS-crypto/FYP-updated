import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Login from './Components/Login';
import Gynacologist from './Components/Gynacologist';
import Skin from './Components/SkinSpecialist';
import Child from './Components/ChildSpecialist';
import ENT from './Components/ENTSpecialist';
import Orthopadic from './Components/Orthopadic';
import Diagnostics from './Components/Diagnostics';
import Diabetes from './Components/Diabetes';
import Eye from './Components/EyeSpecialist';
import Appointmentform from './Components/AppointmentForm';
import PatientDashboard from './Components/PatientDashboard';
import PatientDashboard2 from './Components/PatientDashboard2';
import PatientDashboard3 from './Components/PatientDashboard3';

function App() {
  return (
    <div>
    <Switch>
<Route exact path="/" component={Home}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/appointmentform" component={Appointmentform}></Route>
<Route path="/home" component={Home}></Route>
<Route path="/aboutus" component={Aboutus}></Route>
<Route path="/contactus" component={Contactus}></Route>
<Route path="/Login" component={Login}></Route>
<Route path="/Gynacologist" component={Gynacologist}></Route>
<Route path="/Skin" component={Skin}></Route>
<Route path="/Child" component={Child}></Route>
<Route path="/ENT" component={ENT}></Route>
<Route path="/Orthopadic" component={Orthopadic}></Route>
<Route path="/Diagnostics" component={Diagnostics}></Route>
<Route path="/Diabetes" component={Diabetes}></Route>
<Route path="/Eye" component={Eye}></Route>
<Route path="/patientdashboard" component={PatientDashboard}></Route>
<Route path="/patientdashboard2" component={PatientDashboard2}></Route>
<Route path="/patientdashboard3" component={PatientDashboard3}></Route>


</Switch>

    </div>
    
  );
}

export default App;
