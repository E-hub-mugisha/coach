import React from 'react'

function Sidebar () {
  return (
    <div><aside class="slide-bar">
	<div class="close-mobile-menu">
		<a href="javascript:void(0);"><i class="fas fa-times"></i></a>
	</div>
	<nav class="side-mobile-menu">
		<ul id="mobile-menu-active">
			<li class="has-children">
				<a href="index.html">HOME</a>
				<ul class="sub-menu">
					<li><a href="index.html">Homepage One</a></li>
					<li><a href="index-2.html">Homepage Two</a></li>
					<li><a href="index-3.html">Homepage Three</a></li>
					<li><a href="index-4.html">Homepage Four</a></li>
					<li><a href="index-5.html">Homepage Five</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="#">PAGES</a>
				<ul class="sub-menu">
					<li><a href="about.html">About Page</a></li>
					<li><a href="bmi-calculator.html">BMI Calculator</a></li>
					<li><a href="service.html">Service Page</a></li>
					<li><a href="trainer.html">Trainer Page</a></li>
					<li><a href="trainer-details.html">Trainer Details</a></li>
					<li><a href="pricing.html">Pricing Page</a></li>
					<li><a href="404.html">404 Page</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="class.html">CLASSES</a>
				<ul class="sub-menu">
					<li><a href="class.html">Class Page</a></li>
					<li><a href="class-2.html">Class Two</a></li>
					<li><a href="class-schedule.html">Class Schedule</a></li>
					<li><a href="class-details.html">Class Details One</a></li>
					<li><a href="class-details-2.html">Class Details Two</a></li>
					<li><a href="class-details-3.html">Class Details Three</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="gallery.html">Gallery</a>
				<ul class="sub-menu">
					<li><a href="gallery.html">Gallery Page</a></li>
					<li><a href="gallery-2.html">Gallery Page Two</a></li>
					<li><a href="gallery-carousel.html">Gallery Carousel</a></li>
					<li><a href="gallery-details.html">Gallery Details</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="blog.html">BLOG</a>
				<ul class="sub-menu">
					<li><a href="blog-grid.html">Blog Grid</a></li>
					<li><a href="blog.html">Blog Standard</a></li>
					<li><a href="blog-details.html">Blog Details</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="shop.html">SHOP</a>
				<ul class="sub-menu">
					<li><a href="shop.html">Shop Page</a></li>
					<li><a href="shop-2.html">Shop Two</a></li>
					<li><a href="shop-details.html">Shop Details</a></li>
				</ul>
			</li>
			<li class="has-children">
				<a href="contact.html">Contact</a>
				<ul class="sub-menu">
					<li><a href="contact.html">Contact Page</a></li>
					<li><a href="contact-2.html">Contact Two</a></li>
				</ul>
			</li>
		</ul>
	</nav>

	<div class="sidebar-widget-wrapper">
		<div class="sidebar-widget logo-side">
			<a href="index.html">
				<img src="assets/img/logo/logo.png" alt="logo"/>
			</a>
		</div>

		<div class="sidebar-widget">
			<div class="info-wdget">
				<h4 class="widget-title">Office Address</h4>
				<p>
					23/A, Miranda City Likaoli Prikano, Dope
				</p>
			</div>
		</div>

		<div class="sidebar-widget">
			<div class="info-wdget">
				<h4 class="widget-title">Phone Number</h4>
				<p> +0989 7876 9865 9 </p>
				<p> +(090) 8765 86543 85 </p>
			</div>
		</div>

		<div class="sidebar-widget">
			<div class="info-wdget">
				<h4 class="widget-title">Email Address</h4>
				<p> <a href="https://www.devsnews.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9df4f3fbf2ddf8e5fcf0edf1f8b3fef2f0">[email&#160;protected]</a> </p>
				<p> <a href="https://www.devsnews.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="600518010d100c054e0d01090c2008150d4e030f0d">[email&#160;protected]</a> </p>
			</div>
		</div>

		<div class="sidebar-widget">
			<div class="instagram">
				<a href="#">
					<img src="assets/img/widget/gallery-1.jpg" alt="instagram"/>
				</a>
				<a href="#">
					<img src="assets/img/widget/gallery-2.jpg" alt="instagram"/>
				</a>
				<a href="#">
					<img src="assets/img/widget/gallery-3.jpg" alt="instagram"/>
				</a>
				<a href="#">
					<img src="assets/img/widget/gallery-4.jpg" alt="instagram"/>
				</a>
				<a href="#">
					<img src="assets/img/widget/gallery-1.jpg" alt="instagram"/>
				</a>
				<a href="#">
					<img src="assets/img/widget/gallery-2.jpg" alt="instagram"/>
				</a>
			</div>
		</div>

		<div class="sidebar-widget">
			<div class="social-widget">
				<a href="#">
					<i class="fab fa-facebook-f"></i>
				</a>
				<a href="#">
					<i class="fab fa-twitter"></i>
				</a>
				<a href="#">
					<i class="fab fa-google-plus-g"></i>
				</a>
				<a href="#">
					<i class="fab fa-instagram"></i>
				</a>
			</div>
		</div>
	</div>
</aside>
<div class="body-overlay"></div>
</div>
  )
}

export default Sidebar