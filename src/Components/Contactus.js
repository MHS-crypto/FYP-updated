import React from 'react';
import './Contactus.css';
import img1 from './Images/location.png';
import img2 from './Images/mail.png';
import img3 from './Images/call.png';
import img4 from './Images/fb.png';
import img5 from './Images/twi.png';
import img6 from './Images/ig.png';
import img7 from './Images/yt.png';

function Contact() {

    
  return (
    <div>
      <section class="section2">
        <div class="container2">
            <div class="contactinfo">
                <div>
                    <h2 class="h2info">Contact Info</h2>
                    <ul class="info">
                        <li class="li2">
                            <span class="span2"><img class="img22" src={img1}></img></span>
                            <span class="span2">
                                2912 Chandni Chok Road<br/>
                                Rawalpindi, PK<br/>
                                46000
                            </span>
                        </li>
                        <li class="li2">
                            <span class="span2"><img class="img22" src={img2}></img></span>
                            <span class="span2">medtech07@gmail.com</span>
                        </li>
                        <li class="li2">
                            <span class="span2"><img class="img22" src={img3}></img></span>
                            <span class="span2">+92 3441195406</span>
                        </li>
                    </ul>
                    </div>
                    <ul class="sci2">
                        <li class="li2"><a class="aa2" href="#"><img class="img22" src={img4}></img></a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li class="li2"><a class="aa2 "href="#"><img class="img22" src={img5}></img></a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li class="li2"><a class="aa2" href="#"><img class="img22" src={img6}></img></a></li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li class="li2"><a class="aa2" href="#"><img class="img22" src={img7}></img></a></li>
                    </ul>
                
            </div>
            <div class="contactForm">
                <h2 class="h2info">Send a Message</h2>
                <div class="formBox">
                    <div class="inputBox w50">
                        <input class="input2" type="text" name="" required/>
                        <span class="span2">First Name</span>
                    </div>
                    <div class="inputBox w50">
                        <input class="input2" type="text" name="" required/>
                        <span class="span2">Last Name</span>
                    </div>
                    <div class="inputBox w50">
                        <input class="input2" type="text" name="" required/>
                        <span class="span2">Email Address</span>
                    </div>
                    <div class="inputBox w50">
                        <input class="input2" type="text" name="" required/>
                        <span class="span2">Mobile Number</span>
                    </div>
                    <div class="inputBox w100">
                        <textarea class="txtarea2" name="" required></textarea>
                        <span class="span2">Write your message here...</span>
                    </div>
                    <div class="inputBox w100">
                        <input class="input2" type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;