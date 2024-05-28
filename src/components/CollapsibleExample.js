import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function CollapsibleExample() {
  return (
    <header className="header-area">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <div className="logo-area">
            <Navbar.Brand href="#home">
              <img src="assets/img/logo/logo.png" alt="Logo" height={'50px'} width={'100%'} />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle className="hamburger-menu" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav className="ms-auto justify-item-center">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#blog">BLOG</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
            <Nav className="ms-auto">  {/* Changed from me-auto to ms-auto */}
              <Nav.Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default CollapsibleExample;
