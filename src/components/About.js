import React from 'react';
import Brands from './Brands';
import Testimonials from './Testimonials';

function About() {
  return (
    <main>
  
	<section class="about-area-3 pt-130 pb-130">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-12">
					<div class="about-content-4 mb-md-50 mb-xs-50">
						<div class="about-text">
							<div class="section-title-3">
								<h3 class="bars">
									Welcome To Gymee An Exclusive Gymasian
								</h3>
							</div>
							<p>
              Hi, I'm THEO. With over [X] years of experience in the fitness industry and certifications from [Certifying Organizations], I have helped countless clients transform their lives through customized training programs and holistic wellness coaching. My approach is client-centered, focusing on your unique needs and goals to ensure you get the results you want.
							</p>
							<a href="/contact" class="read-more mt-20">
								join with us <i class="fas fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-7 align-self-center">
					<div class="about-thumb mb-30">
						<img src="assets/img/gallery/1.jpg" alt="about"/>
					</div>
				</div>
				<div class="col-lg-3 col-md-5 align-self-center">
					<div class="about-thumb mb-30">
						<img src="assets/img/gallery/4.jpg" alt="about"/>
					</div>
				</div>
			</div>
			<div class="row mt-100 mt-md-50 mt-xs-50 justify-content-between">
				<div class="col-lg-6">
					<div class="video-wrap-2 mb-md-50 mb-xs-50">
						<img src="assets/img/gallery/man-practicing.jpg" alt="thumb"/>
						<div class="video-play">
							<a href="https://www.youtube.com/watch?v=ZIKt1-r3PL0" class="popup-video">
								<i class="fas fa-play"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="about-content-4">
						<div class="about-text">
							<div class="section-title-3">
								<h3 class="bars">
									<span>Training</span> Is Very Important For Our Health, Let’s workout<span>Together</span> We Are So Trusted
								</h3>
							</div>
							<p>
              to empower individuals to achieve their fitness goals through personalized, science-based training programs and holistic lifestyle coaching
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	  
	<section class="about-area pt-130 pb-130">
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-5 col-md-8">
					<div class="about-img mb-md-60 mb-xs-60">
						<img src="assets/img/thumb/thumb-15.jpg" alt="About image"/>
						<div class="line-animation-wrap">
							<div class="animation-wrap">
								<div class="line-item one"></div>
								<div class="line-item two"></div>
								<div class="line-item three"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-7 col-md-12">
					<div class="about-content-2 mb-50">
						<div class="section-title-2 bar-theme-color mb-30">
							<h3>We Are More Skilled In Various Health & Fitness</h3>
							<span>Skill</span>
						</div>
						<div class="about-text">
							<p>
								Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
								ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu
								ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
								qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
								eius modi tempora incidunt ut labore et
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 col-6">
							<div class="progress-circular">
								<input type="text" class="knob" value="0" data-rel="75" data-linecap="round"
								       data-width="130" data-height="130" data-bgcolor="#dddddd" data-fgcolor="#e63c35"
								       data-thickness=".10" data-readonly="true" disabled/>
								<h4>GYM</h4>
							</div>
						</div>
						<div class="col-md-4 col-6">
							<div class="progress-circular">
								<input type="text" class="knob" value="0" data-rel="85" data-linecap="round"
								       data-width="130" data-height="130" data-bgcolor="#dddddd" data-fgcolor="#e63c35"
								       data-thickness=".10" data-readonly="true" disabled/>
								<h4>Yoga</h4>
							</div>
						</div>
						<div class="col-md-4 col-6">
							<div class="progress-circular">
								<input type="text" class="knob" value="0" data-rel="65" data-linecap="round"
								       data-width="130" data-height="130" data-bgcolor="#dddddd" data-fgcolor="#e63c35"
								       data-thickness=".10" data-readonly="true" disabled/>
								<h4>SPA</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
	<Testimonials/>
  
	<div class="blog-area-2 pt-130 pb-100">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="section-title-2 bar-theme-color text-center mb-35">
						<h3>
							Something Know About Our Latest Blog & News
						</h3>
						<span>News</span>
					</div>
				</div>
			</div>
			<div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-thumb mb-35">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-2.jpg" alt="blog"/>
                </a>
              </div>
              <div className="blog-meta">
                <span><i className="fas fa-calendar-alt"></i> 20 Jan 2020</span>
                <span><i className="far fa-comments"></i> Comments (1k)</span>
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blog-details.html">
                  Fitness Tips
                  </a>
                </h3>
  
                <a href="blog-details.html" className="read-more">
                  Read more <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-thumb mb-35">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-3.jpg" alt="blog"/>
                </a>
              </div>
              <div className="blog-meta">
                <span><i className="fas fa-calendar-alt"></i> 20 Jan 2020</span>
                <span><i className="far fa-comments"></i> Comments (1k)</span>
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blog-details.html">
                  Nutrition Advice
                  </a>
                </h3>
  
                <a href="blog-details.html" className="read-more">
                  Read more <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-thumb mb-35">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-4.jpg" alt="blog"/>
                </a>
              </div>
              <div className="blog-meta">
                <span><i className="fas fa-calendar-alt"></i> 20 Jan 2020</span>
                <span><i className="far fa-comments"></i> Comments (1k)</span>
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blog-details.html">
                  Wellness and Mindset
                  </a>
                </h3>
  
                <a href="blog-details.html" className="read-more">
                  Read more <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          
        </div>
		</div>
	</div>
	
  <Brands/>
</main>
  );
}

export default About;
