import Brands from './Brands';
import React from 'react';
import SliderArea from './SliderArea';
import Services from './Services';
import Testimonials from './Testimonials';
import BMICalculator from './BMICalculator';
import Contact from './Contact';


function Home() {
  
  return (
    <main>
      <SliderArea/>

  <Brands />
	
	<section class="about-area-3 pt-130 pb-130">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 col-md-10 text-center text-xl-right text-lg-right pt-xl-60 pt-lg-60">
					<div class="about-thumb mb-30">
						<img src="assets/img/gallery/1.jpg" alt="about"/>
					</div>
					<div class="about-thumb">
						<img src="assets/img/gallery/2.jpg" alt="about"/>
					</div>
				</div>
				<div class="col-lg-6 col-md-12">
					<div class="about-content-3 pt-35">
						<div class="thumb-text">
							<img src="assets/img/thumb/thumb-8.jpg" alt="thumb"/>
							<a href="/about" class="read-more">About us</a>
						</div>
						<div class="about-text mt-50">
							<div class="section-title-3">
								<h3 class="bars">
									Welcome To <span>THEO</span>
									Professional Fitness Trainer
									And GYM Coach
								</h3>
							</div>
							<p>
              Our coaching programs are designed to provide personalized support, 
              guidance, and empowerment to help you manage your condition, 
              improve your quality of life, and achieve your goals.
							</p>
							<a href="/about" class="btn btn-gra mt-35">
								LEARN MORE <i class="fas fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-shape">
			<img src="assets/img/shape/shape-15.png" />
		</div>
	</section>
	
	<div class="video-area bg-off-white pt-130">
		<div class="container">
			<div class="row mb-80">
				<div class="col-xl-6 col-lg-6">
					<div class="section-title-3 video-title">
						<h3 class="bars">
							<span>Training</span> Is Very Important
							For Our Health, <span>Our Approach</span>
						</h3>
					</div>
				</div>
				<div class="col-xl-6 col-lg-6">
					<div class="video-text">
						<p>
            We believe that every individual possesses unique strengths, talents, and aspirations. 
            Our coaching approach is centered on personalized guidance and holistic support to help you harness your full potential. 
            Whether you're seeking career advancement, personal development, or enhanced well-being, 
            our experienced coaches are here to partner with you on your journey to success.
						</p>
						<a href="/about" class="read-more">
							learn more <i class="fas fa-angle-double-right"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<div class="video-wrap mb--130">
						<img src="assets/img/gallery/4.jpg" alt="thumb"/>
						<div class="video-play">
							<a href="https://www.youtube.com/watch?v=ZIKt1-r3PL0" class="popup-video">
								<i class="fas fa-play"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="video-shape">
			<img class="rotateme" src="assets/img/shape/shape-16.png" alt="shape"/>
		</div>
	</div>
	
	<Services/>
	
	<div class="gallery-area pt-130 pb-70">
		<div class="container">
			<div class="row align-items-center mb-60">
				<div class="col-xl-9">
					<div class="section-title-2 bar-theme-color gallery-title">
						<h3>Recent Project Let’s See Our Photo Gallery</h3>
						<span>Gallery</span>
					</div>
				</div>
				<div class="col-xl-3 col-xl-3 text-xl-right text-lg-right text-center">
					<a href="/about" class="btn btn-gra">
						LEARN MORE <i class="fas fa-angle-double-right"></i>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="gallery-wrap mb-30">
						<div class="gallery-thumb">
							<img src="assets/img/gallery/man-practicing.jpg" alt="Gallery"/>
							<div class="gallery-link">
								<a href="gallery-details.html">
									<i class="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
						<div class="gallery-content">
							<h3>Men &amp; Women Fitness</h3>
							<span>Fitness, Men</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="gallery-wrap mb-30">
						<div class="gallery-thumb">
							<img src="assets/img/gallery/2.jpg" alt="Gallery"/>
							<div class="gallery-link">
								<a href="gallery-details.html">
									<i class="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
						<div class="gallery-content">
							<h3>Women Fitness Gallery</h3>
							<span>Fitness, Women</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="gallery-wrap mb-30">
						<div class="gallery-thumb">
							<img src="assets/img/gallery/1.jpg" alt="Gallery"/>
							<div class="gallery-link">
								<a href="gallery-details.html"><i class="fas fa-long-arrow-alt-right"></i></a>
							</div>
						</div>
						<div class="gallery-content">
							<h3>Dumbbelling Gallery</h3>
							<span>Fitness, Women</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	{/* <div class="team-area-2 bg-off-white pt-130 pb-130">
		<div class="container">
			<div class="row align-items-center mb-60">
				<div class="col-xl-9">
					<div class="section-title-2 bar-theme-color team-title-2">
						<h3>We Have Expert Team Member Meet Our Trainer</h3>
						<span>Team</span>
					</div>
				</div>
				<div class="col-xl-3 col-xl-3 text-xl-right text-lg-right text-center">
					<a href="trainer.html" class="btn btn-gra">
						LEARN MORE <i class="fas fa-angle-double-right"></i>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-3 col-md-6">
					<div class="team-wrap-2 mb-30">
						<div class="team-img">
							<img src="assets/img/team/team.jpg" alt="Team"/>
						</div>
						<div class="team-content">
							<h3><a href="trainer-details.html">Howard C. Skinner</a></h3>
							<span>Dumbbell Trainer</span>
							<div class="team-social-link">
								<ul>
									<li>
										<a href="#"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-instagram"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-google"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6">
					<div class="team-wrap-2 mb-30">
						<div class="team-img">
							<img src="assets/img/team/team-2.jpg" alt="img"/>
						</div>
						<div class="team-content">
							<h3><a href="trainer-details.html">Raymond L. Brown</a></h3>
							<span>Boxing Trainer</span>
							<div class="team-social-link">
								<ul>
									<li>
										<a href="#"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-instagram"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-google"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6">
					<div class="team-wrap-2 mb-30">
						<div class="team-img">
							<img src="assets/img/team/team-3.jpg" alt=""/>
						</div>
						<div class="team-content">
							<h3><a href="trainer-details.html">Charles T. McAllister</a></h3>
							<span>Caradio Trainer</span>
							<div class="team-social-link">
								<ul>
									<li>
										<a href="#"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-instagram"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-google"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6">
					<div class="team-wrap-2 mb-30">
						<div class="team-img">
							<img src="assets/img/team/team-4.jpg" alt=""/>
						</div>
						<div class="team-content">
							<h3><a href="trainer-details.html">Solomon K. Sawyers</a></h3>
							<span>Beauty Trainer</span>
							<div class="team-social-link">
								<ul>
									<li>
										<a href="#"><i class="fab fa-facebook-f"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-instagram"></i></a>
									</li>
									<li>
										<a href="#"><i class="fab fa-google"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="team-shape-1">
			<img src="assets/img/shape/shape-17.png" />
		</div>
		<div class="team-shape-2">
			<img src="assets/img/shape/shape-18.png" />
		</div>
	</div> */}
	
	{/* <div class="schedule-area-2 bg-black pt-130 pb-130">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="section-title-2 bar-theme-color text-white text-center mb-35">
						<h3>
							Our Class Schedule We Making Scdedule Perfectly
						</h3>
						<span>Schedule</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<div class="schedule-table">
						<table class="table bg-white">
							<thead>
							<tr>
								<th>Routine</th>
								<th>10 am</th>
								<th>11 am</th>
								<th>03 pm</th>
								<th>05 pm</th>
								<th>07 pm</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td class="day">Sunday</td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
							</tr>
							<tr>
								<td class="day">Monday</td>
								<td></td>
								<td class="active">
									<h4>Boxing</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="day">Tuesday</td>
								<td class="active">
									<h4>Yoga</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td></td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td class="active">
									<h4>Boxing</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="day">Wednesday</td>
								<td class="active">
									<h4>Gym</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Yoga</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Yoga</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="day">Thursday</td>
								<td></td>
								<td class="active">
									<h4>Racing</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
							</tr>
							<tr>
								<td class="day">Friday</td>
								<td class="active">
									<h4>Dumbbelling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Grid Training</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
								<td class="active">
									<h4>Jumping</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="day">Satarday</td>
								<td></td>
								<td></td>
								<td class="active">
									<h4>Grid Training</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td class="active">
									<h4>Cycling</h4>
									<p>10 am - 11 am</p>
									<div class="hover">
										<h4>Cycling</h4>
										<p>10 am - 11 am</p>
										<span>Zakila Russow</span>
									</div>
								</td>
								<td></td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="schedule-shape-1">
			<img src="assets/img/shape/shape-8.png" alt='img' />
		</div>
		<div class="schedule-shape-2">
			<img src="assets/img/shape/shape-9.png" alt='img' />
		</div>
		<div class="schedule-shape-icon">
			<i class="flaticon-dumbbells"></i>
		</div>
		<div class="schedule-shape-3">
			<img class="rotateme" src="assets/img/shape/shape-10.png" alt='img' />
		</div>
	</div> */}
	
  
	{/* <BMICalculator/> */}

	<Testimonials/>
	
	<Contact/>

	<div class="blog-area-2 pt-130 pb-100">
		<div class="container">
			<div class="row">
				<div class="col-xl-4 col-md-6">
					<div class="blog-area-title">
						<div class="section-title-3 bar-theme-color mb-35">
							<h3 class="bars">
								Something Know About Health Tips & Tricks
							</h3>
						</div>
						<p>
            Insights and Resources
						</p>
						<a href="/blogs" class="btn btn-gra">
							VIEW ALL NEWS <i class="fas fa-angle-double-right"></i>
						</a>
					</div>
				</div>
				<div class="col-xl-4 col-md-6">
					<div class="blog-wrap blog-white mb-30" data-background="assets/img/blog/blog-1.jpg">
						<div class="blog-author mb-40">
							<div class="author-thumb">
								<img src="assets/img/author/author-3.jpg" alt="Author"/>
							</div>
							<div class="author-content">
								<h4>5 Tips for Setting and Achieving Your Goals</h4>
								<span>Post By Admin</span>
							</div>
						</div>
						<div class="blog-meta">
							<span><i class="fas fa-calendar-alt"></i> 20 Jan 2020</span>
							<span><i class="far fa-comments"></i> Comments (1k)</span>
						</div>
						<div class="blog-content">
							<h3>
								<a href="blog-details.html">
                Discover practical strategies to set realistic goals and stay motivated throughout your journey.
								</a>
							</h3>

							<a href="blog-details.html" class="read-more">
								Read more <i class="fas fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-md-6">
					<div class="blog-wrap blog-white mb-30" data-background="assets/img/blog/blog-1.jpg">
						<div class="blog-author mb-40">
							<div class="author-thumb">
								<img src="assets/img/author/author-3.jpg" alt="Author"/>
							</div>
							<div class="author-content">
								<h4>How to Manage Stress and Improve Well-being</h4>
								<span>Post By Admin</span>
							</div>
						</div>
						<div class="blog-meta">
							<span><i class="fas fa-calendar-alt"></i> 20 Jan 2020</span>
							<span><i class="far fa-comments"></i> Comments (1k)</span>
						</div>
						<div class="blog-content">
							<h3>
								<a href="blog-details.html">
                Learn effective stress management techniques to enhance your mental and physical health.
								</a>
							</h3>

							<a href="blog-details.html" class="read-more">
								Read more <i class="fas fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</main>
  );
}

export default Home;
