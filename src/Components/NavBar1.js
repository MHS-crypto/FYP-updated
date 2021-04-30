import React from 'react';
import './NavBar1.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function NavBar1() {
  return (   
    <div>
    <Switch>
        <div class="header-background">
            <div id="nav" class="sticky-nav">

            <nav class="navbar navbar-expand-lg">
              <div class="container">
                <Link class="navbar-brand" id="aa" to="/home">MedTech</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  <span></span>
                  <span></span>

                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                   
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="aa" href="#move" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hospitals
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item"  href="#move">PIMS Hospital</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item"  href="#move">Cantt General Hospital</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item"  href="#move">District Headquarter Hospital</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item"  href="#move">Holy Family Hospital</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item"  href="#move">Benazir Bhutto Hospital</a></li>
                        
                      </ul>
                    </li> 
                    &nbsp;&nbsp;&nbsp;
                    <li class="nav-item">
                      <Link class="nav-link" aria-current="page" id="aa" to="/aboutus">About Us</Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li class="nav-item">
                      <Link class="nav-link" id="aa" to="/contactus">Contact</Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;

                    <li class="nav-item">
                      <Link class="nav-link" id="aa" to="/signup">Signup</Link>
                    </li>
                                        
                  </ul>
                  <form class="d-flex">
                    <Link class="btnnn" to="/Login">Admin Login</Link>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        </Switch>
    </div>
  );
}

export default NavBar1;
