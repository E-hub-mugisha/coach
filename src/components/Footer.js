import React from 'react'

function Footer () {
    const currentYear = new Date().getFullYear()
  return (
<footer class="footer-area">
	<div class="footer-top bg-black">
		<div class="container">
			<div class="row pt-80 pb-40">
				<div class="col-xl-3 col-md-6">
					<div class="footer-widgets footer-about-widget">
						<div class="footer-logo">
							<a href="index.html">
								<img src="/assets/img/logo/logo.png" alt="Logo"/>
							</a>
						</div>
						<p>
                        Unlock your potential and achieve your goals with personalized coaching and training programs
						</p>
						<div class="social">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-instagram"></i></a>
							<a href="#"><i class="fab fa-google"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xl-2 col-md-6">
					<div class="footer-widgets latest-news">
						<h3 class="widget-title-2">Useful Links</h3>
						<div class="news-wrap">
							<div class="news-content">
								<h4>
									<a href="/">
										Home
									</a>
								</h4>
							</div>
						</div>
						<div class="news-wrap">
							<div class="news-content">
								<h4>
									<a href="/about">
										About
									</a>
								</h4>
							</div>
						</div>
                        <div class="news-wrap">
							<div class="news-content">
								<h4>
									<a href="/blogs">
										Blog
									</a>
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6">
					<div class="footer-widgets contact-widget">
						<h3 class="widget-title-2">Contact Us</h3>
						<p>
							Master-builder of human happi nes one rejects, dislikesor
						</p>
						<ul>
							<li>
								<i class="fas fa-home"></i>
								<span>KK 400 ST Kigali city,Rwanda</span>
							</li>
							<li>
								<a href="#&quot;&quot;">
									<i class="fas fa-envelope"></i>
									<span><span class="__cf_email__" >coach@email.com</span></span>
								</a>
							</li>
							<li>

								<a href="#">
									<i class="fas fa-phone"></i>
									<span>+012 (4567) 789</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-xl-3 col-md-6">
					<div class="footer-widgets newsletters-widget">
						<h3 class="widget-title-2">Newsletters</h3>
						<p>
							Neque porro quisquam doe psu quia dolor amet consect
						</p>
						<form action="#">
							<div class="input-wrap">
								<input type="text" placeholder="Enter Your Email"/>
							</div>
							<button class="btn btn-gra">
								subscribe <i class="far fa-angle-double-right"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-6 col-lg-6">
					<div class="copyright text-xl-left text-lg-left text-center mb-md-10 mb-xs-10">
						<p>Copyright <a href="/">THEO</a> ©{currentYear}. All Rights Reserved</p>
					</div>
				</div>
				<div class="col-xl-6 col-lg-6">
					<div class="footer-menu">
						<ul>
							<li><a href="#">Privacy</a></li>
							<li><a href="#">Terms Of Services</a></li>
							<li><a href="#">Accessibility</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

  )
}

export default Footer