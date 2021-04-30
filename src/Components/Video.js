import React from 'react';
import './NavBar.css'
import vid from '../Video/new.mp4';

function Videos() {
  return (
    <div>
    
    
      <video id="vid" width="100%"  autoPlay muted loop>

        <source src={vid} type="video/mp4"/>

      </video>
      
      
    </div>
  );
}

export default Videos;
