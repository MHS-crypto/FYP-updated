import React from 'react';
import './CardView.css';
//images
import img1 from './Images/doc15.jpg';
import img2 from './Images/doc21.jpg';
import img3 from './Images/doc1.jpg';

import imgbg from './Images/card-bg.png';
 

function DoctorCardView() {
  return (
    <div>
        
	<section>
		<div class="container">
			<h1 class="heading">Meet Our Doctors</h1>
			<div class="card-wrapper">
				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img1} alt="profile image" class="profile-img"/>
					<h1 id="h111">Dr. Fozia Jameel</h1>
					<p class="job-title">Gynecologist</p>
					<p class="about">
						Dr. Fozia Jameel is a Gynecologist and Obstetrician. Dr. Fozia Jameel is among the Best Gynecologist in Lahore. She has a MBBS, FCPS and FMAS (Laparoscopy) degree along with an experience of 12 years.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img2} alt="profile image" class="profile-img"/>
					<h1 id="h111">Dr. Noman Ali</h1>
					<p class="job-title">Skin Specialist</p>
					<p class="about">
						Dr. Noman Ali is among the Best Dermatologists in Lahore. Dr Noman Ali has over 15 years of experience in the field of Dermatology. She provides a comprehensive array of Skin related services specializing.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img3} alt="profile image" class="profile-img"/>
					<h1 id="h111">Dr. Ayesha Khan</h1>
					<p class="job-title">Child Specialist</p>
					<p class="about">
						Dr. Ayesha Khan is a Pediatrician and Neonatologist. Dr. Ayesha Khan is among the Best Pediatrician in Lahore. He has a M.B.B.S, F.C.P.S. (Pediatrics) and Fellow Neonatology degree along with an experience of 9 years.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

		
			</div>
		</div>
	</section>

    
     
    </div>
  );
}

export default DoctorCardView;
