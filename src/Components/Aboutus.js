import React from 'react';
import './Aboutus.css';
import img1 from './Images/pic1.png';
import img2 from './Images/pic2.png';
import img3 from './Images/pic3.png';
import img4 from './Images/pic4.png';
import img5 from './Images/backimg3.png';
import img6 from './Images/DOCC.png';
function About() {
  return (
    <div>

      <div class="wrapper1">
          <div class="section1">
              <div class="left-section1">
                  <div class="content1">
                      <div class="title1">
                          <h2 class="h2h">About Us</h2>
                          <h3 class="h3h"><em>Meet the MedTech Team</em></h3>
                      </div>
                      <p class="p1pp">We're here to make sure you’re getting the most from your membership. You can learn about each of us below, along with ways to connect. We would love to hear from you!</p>
                      <div class="button1">
                          <a class="a1aa" href="#">Read More</a>
                      </div>
                      <div class="social1">
                          <a class="a1aa" href="#"><i class="fab fa-facebook-f"></i></a>
                          <a class="a1aa" href="#"><i class="fab fa-twitter"></i></a>
                          <a class="a1aa" href="#"><i class="fab fa-instagram"></i></a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a class="a1aa" href="#"><i class="fab fa-pinterest"></i></a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a class="a1aa" href="#"><i class="fab fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
              <div class="image-section1">
                  <img class="imgi1" src={img6}/>

              </div>

          </div>
      </div>

      <div class="container1" style={{backgroundImage:`url(${img5})`}}>
          <h1 id="hh1">Hassan Shafiq</h1>
          <h2 id="hh2">Team Leader & Back End Developer</h2>
          <div class="image1">
          <img id="img11" src={img1}/>
          </div>
          <p id="pp1">
          He is the leader of our team. He guides us how to implement the things and give us uniqe ideas&nbsp; to implement creative and unique code of our website.
          </p>
          <a href="#" class="btn01">Read More</a>
      </div>

      <div class="container1" style={{backgroundImage:`url(${img5})`}}>
          <h1 id="hh1">Muhammad Atif</h1>
          <h2 id="hh2">Developer & Designer</h2>
          <div class="image1">
          <img id="img11" src={img2}/>
          </div>
          <p id="pp1">
          He is developer and Designer of this website. He knows how to code and what to code, the main core of any website is The Design of Website and he do's the best.
          </p>
          <a href="#" class="btn01">Read More</a>
      </div>

      <div class="container1" style={{backgroundImage:`url(${img5})`}}>
          <h1 id="hh1">Obaid Raza</h1>
          <h2 id="hh2">Web Designer</h2>
          <div class="image1">
          <img id="img11" src={img3}/>
          </div>
          <p id="pp1">
          He is the designer of this website. He design the whole theme of our website and he has great experience of designing field.
          </p>
          <a href="#" class="btn01">Read More</a>
      </div>

      <div class="container1" style={{backgroundImage:`url(${img5})`}}>
          <h1 id="hh1">Dr. Saud Altaf</h1>
          <h2 id="hh2">Supervisor</h2>
          <div class="image1">
          <img id="img11" src={img4}/>
          </div>
          <p id="pp1">
          He is the supervisor of our project. He guides us thorugh the whole implementation of our website and check our performance every week and give us recommandation regrading our project.
          </p>
          <a href="#" class="btn01">Read More</a>
      </div>
      

    </div>
  );
}

export default About;