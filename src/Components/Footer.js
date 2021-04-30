import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div>
        <div class="container"></div>
        <footer>
          <section class="ft-main">
            <div class="ft-main-item">
              <h2 class="ft-title">About</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Hospitals</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Location</a></li>
              </ul>
            </div>
            <div class="ft-main-item">
              <h2 class="ft-title">Resources</h2>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Latest</a></li>
              </ul>
            </div>
            <div class="ft-main-item">
              <h2 class="ft-title">Contact</h2>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Phone No</a></li>
              </ul>
            </div>
            <div class="ft-main-item">
              <h2 class="ft-title">Stay Updated</h2>
              <p>Subscribe to our Network to get our latest news.</p>
              <form>
                <input type="email" name="email" placeholder="Enter email address"/>
                <input type="submit" value="Subscribe"/>
              </form>
            </div>
          </section>
          
          <section class="ft-legal">
          <ul class="social-mediaa">
            <li><h3 class="h3">Contact with us</h3></li>
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          </ul>

            <ul class="ft-legal-list">
              <li><a href="#" class="cond">Terms &amp; Conditions</a></li>
              <li><a href="#" class="priv">Privacy Policy</a></li>
              <li>&copy; 2021 Copyright MedTech</li>
            </ul>
          </section>
        </footer>

    </div>
  );
}

export default Footer;
