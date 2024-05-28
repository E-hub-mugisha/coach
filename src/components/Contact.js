import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/send_email.php', formData)
      .then(response => {
        setStatusMessage('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        setStatusMessage('Failed to send the message, please try again.');
      });
  };

  return (
    <main>
      <div className="contact-area pt-70 pb-70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-5">
              <div className="contact-text mb-xs-25">
                <div className="section-title-2 text-right bar-theme-color contact-title">
                  <h3>Feel Feel Don't Hesitate To Contact With Us Or Email Us</h3>
                  <span>Hey</span>
                </div>
                <div className="contact-info justify-content-end">
                  <div className="info-content">
                    <h4>Contact me</h4>
                    <span>+012 (345) 6789</span>
                  </div>
                  <div className="icon-box">
                    <i className="flaticon-whatsapp"></i>
                  </div>
                </div>
                <div className="contact-info justify-content-end">
                  <div className="info-content">
                    <h4>Email us</h4>
                    <span><a href="mailto:coach@email.com" className="__cf_email__">coach@email.com</a></span>
                  </div>
                  <div className="icon-box">
                    <i className="flaticon-email"></i>
                  </div>
                </div>
                <div className="contact-info justify-content-end">
                  <div className="info-content">
                    <h4>Location</h4>
                    <span>KK 400 ST Kigali city, Rwanda</span>
                  </div>
                  <div className="icon-box">
                    <i className="flaticon-pin"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="input-wrap input-icon icon-name">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name Here"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-wrap input-icon icon-email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-wrap input-icon icon-select">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Subject</option>
                      <option value="Coach">Coach</option>
                      <option value="Training">Training</option>
                    </select>
                  </div>
                  <div className="input-wrap input-icon icon-msg">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-gra">
                    Send message <i className="fas fa-angle-double-right"></i>
                  </button>
                </form>
                {statusMessage && <p>{statusMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
