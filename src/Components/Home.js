import React from 'react';
import Video from './Video';
import DoctorCardView from './CardViewDoctor';
import Departments from './Departments';
import Footer from './Footer';
import NavBar from './NavBar1';
import NavBar1 from './NavBar1';


function Home() {
  return (
  
    <div>

    <div>
      <NavBar1/>
    </div>
    <div>
      <Video/>
      <Departments/>
      <DoctorCardView/>
      <Footer/>
            
    </div>
    </div>
   
  );
}

export default Home;
