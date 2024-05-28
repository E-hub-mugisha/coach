import { useState, React} from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header({ name, ...props }) {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <header className="header-area header-style-3">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-xl-center">
        <div className="col-xl-2 col-lg-3 col-md-3 col-6">
          <div className="logo-area">
            <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo"/></a>
          </div>
        </div>
        <div className="col-xl-8 d-xl-flex justify-content-center align-items-center d-none">
          <nav className="main-menu">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink href="class.html">CLASSES</NavLink>
              </li>
              <li>
                <NavLink href="gallery.html">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" activeClassName="active">BLOGS</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-xl-2 col-lg-9 col-md-9 col-6 d-flex justify-content-end align-items-center">
          
          <NavLink onClick={handleShow} className="hamburger-menu">
            <div className="hamburger-btn">
              <div className="hamburger-bar"></div>
            </div>
          </NavLink>
		  <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
      </div>
    </div>
  </header>
  <aside className="slide-bar">
	<div className="close-mobile-menu">
		<a href="javascript:void(0);"><i className="fas fa-times"></i></a>
	</div>
	<nav className="side-mobile-menu">
		<ul id="mobile-menu-active">
			<li className="has-children">
				<a href="index.html">HOME</a>
				<ul className="sub-menu">
					<li><a href="index.html">Homepage One</a></li>
					<li><a href="index-2.html">Homepage Two</a></li>
					<li><a href="index-3.html">Homepage Three</a></li>
					<li><a href="index-4.html">Homepage Four</a></li>
					<li><a href="index-5.html">Homepage Five</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="#">PAGES</a>
				<ul className="sub-menu">
					<li><a href="about.html">About Page</a></li>
					<li><a href="bmi-calculator.html">BMI Calculator</a></li>
					<li><a href="service.html">Service Page</a></li>
					<li><a href="trainer.html">Trainer Page</a></li>
					<li><a href="trainer-details.html">Trainer Details</a></li>
					<li><a href="pricing.html">Pricing Page</a></li>
					<li><a href="404.html">404 Page</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="class.html">CLASSES</a>
				<ul className="sub-menu">
					<li><a href="class.html">Class Page</a></li>
					<li><a href="class-2.html">Class Two</a></li>
					<li><a href="class-schedule.html">Class Schedule</a></li>
					<li><a href="class-details.html">Class Details One</a></li>
					<li><a href="class-details-2.html">Class Details Two</a></li>
					<li><a href="class-details-3.html">Class Details Three</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="gallery.html">Gallery</a>
				<ul className="sub-menu">
					<li><a href="gallery.html">Gallery Page</a></li>
					<li><a href="gallery-2.html">Gallery Page Two</a></li>
					<li><a href="gallery-carousel.html">Gallery Carousel</a></li>
					<li><a href="gallery-details.html">Gallery Details</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="blog.html">BLOG</a>
				<ul className="sub-menu">
					<li><a href="blog-grid.html">Blog Grid</a></li>
					<li><a href="blog.html">Blog Standard</a></li>
					<li><a href="blog-details.html">Blog Details</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="shop.html">SHOP</a>
				<ul className="sub-menu">
					<li><a href="shop.html">Shop Page</a></li>
					<li><a href="shop-2.html">Shop Two</a></li>
					<li><a href="shop-details.html">Shop Details</a></li>
				</ul>
			</li>
			<li className="has-children">
				<a href="contact.html">Contact</a>
				<ul className="sub-menu">
					<li><a href="contact.html">Contact Page</a></li>
					<li><a href="contact-2.html">Contact Two</a></li>
				</ul>
			</li>
		</ul>
	</nav>

	<div className="sidebar-widget-wrapper">
		<div className="sidebar-widget logo-side">
			<a href="index.html">
				<img src="assets/img/logo/logo.png" alt="logo"/>
			</a>
		</div>

		<div className="sidebar-widget">
			<div className="info-wdget">
				<h4 className="widget-title">Office Address</h4>
				<p>
					23/A, Miranda City Likaoli Prikano, Dope
				</p>
			</div>
		</div>

		<div className="sidebar-widget">
			<div className="info-wdget">
				<h4 className="widget-title">Phone Number</h4>
				<p> +0989 7876 9865 9 </p>
				<p> +(090) 8765 86543 85 </p>
			</div>
		</div>

		<div className="sidebar-widget">
			<div className="info-wdget">
				<h4 className="widget-title">Email Address</h4>
				<p> <a href="https://www.devsnews.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9df4f3fbf2ddf8e5fcf0edf1f8b3fef2f0">[email&#160;protected]</a> </p>
				<p> <a href="https://www.devsnews.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="600518010d100c054e0d01090c2008150d4e030f0d">[email&#160;protected]</a> </p>
			</div>
		</div>

		<div className="sidebar-widget">
			<div className="instagram">
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

		<div className="sidebar-widget">
			<div className="social-widget">
				<a href="#">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a href="#">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="#">
					<i className="fab fa-google-plus-g"></i>
				</a>
				<a href="#">
					<i className="fab fa-instagram"></i>
				</a>
			</div>
		</div>
	</div>
</aside>
<div className="body-overlay"></div>
  </div>
  );
}

export default Header;
