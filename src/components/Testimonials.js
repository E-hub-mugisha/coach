import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.testimonial-slider-3 .swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="testimonial-area-2 pt-130 pb-130" data-background="assets/img/bg/testimonial-bg-3.jpg">
      <div className="container position-relative">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title-2 text-center bar-theme-color mb-35">
              <h3>What Our Clients Say About Our Services</h3>
              <span>Says</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial-slider-3 mb-80 mb-xs-0">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide single-slide">
                    <div className="testimonial-wrap-3">
                      <div className="author-info">
                        <img src="assets/img/icon/icon-4.png" alt="author" />
                        <div className="author-content">
                          <h4>Dustin R. Gardner</h4>
                          <span>CEO &amp; Founder (DL)</span>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                        Working with Theo has been a transformative experience. The personalized coaching helped me achieve my career goals and improve my work-life balance.
                        </p>
                        <ul>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star-half-alt"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="testimonial-wrap-3">
                      <div className="author-info">
                        <img src="assets/img/icon/icon-4.png" alt="author" />
                        <div className="author-content">
                          <h4>Dustin R. Gardner</h4>
                          <span>CEO &amp; Founder (DL)</span>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Pleasure itself because ecs ways those who not know pleasure info rationally take trivial example of which ever underti mista kensm idea denouncing pleasure when uncover many web sites
                        </p>
                        <ul>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star-half-alt"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="testimonial-wrap-3">
                      <div className="author-info">
                        <img src="assets/img/icon/icon-4.png" alt="author" />
                        <div className="author-content">
                          <h4>Dustin R. Gardner</h4>
                          <span>CEO &amp; Founder (DL)</span>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>
                        The group training sessions were fantastic. Our team has become more cohesive and motivated thanks to Theo.
                        </p>
                        <ul>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star-half-alt"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"><i className="far fa-angle-double-left"></i></div>
                <div className="swiper-button-next"><i className="far fa-angle-double-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
