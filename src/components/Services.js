import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const Services = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.service-slider-3 .swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        576: {
          slidesPerView: 1
        }
      }
    });
  }, []);

  return (
    <div
      className="service-area-2 bg-fix pt-130 pb-100"
      style={{ backgroundImage: "url('assets/img/bg/service-bg-2.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center mt-130">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title-2 bar-theme-color text-white text-center mb-60">
              <h3>We Offer Exclusive Services For Build Health</h3>
              <span>Services</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="service-slider-3">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide single-slide">
                    <div className="service-wrap-3">
                      <div className="service-icon">
                        <div className="icon">
                          <i className="flaticon-gym-7"></i>
                        </div>
                        <div className="num">01</div>
                      </div>
                      <div className="service-content">
                        <h3><a href="/services">Personal Coaching</a></h3>
                        <p>One-on-one coaching tailored to your unique needs and goals. Whether you want to improve your career, health, or personal life, I provide the guidance and support you need.</p>
                        <a href="/services" className="read-more">
                          Read more <i className="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="service-wrap-3">
                      <div className="service-icon">
                        <div className="icon">
                          <i className="flaticon-gym-5"></i>
                        </div>
                        <div className="num">02</div>
                      </div>
                      <div className="service-content">
                        <h3><a href="/services">Group Training</a></h3>
                        <p>Engaging group sessions designed to foster teamwork, communication, and leadership skills. Ideal for corporate teams or community groups.</p>
                        <a href="/services" className="read-more">
                          Read more <i className="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="service-wrap-3">
                      <div className="service-icon">
                        <div className="icon">
                          <i className="flaticon-workout-1"></i>
                        </div>
                        <div className="num">03</div>
                      </div>
                      <div className="service-content">
                        <h3><a href="/services">Workshops and Seminars</a></h3>
                        <p>Interactive workshops and seminars on various topics, including stress management, goal setting, and leadership development.</p>
                        <a href="/services" className="read-more">
                          Read more <i className="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Add more slides here */}
                </div>
              </div>
              <div className="swiper-button-prev"><i className="far fa-angle-double-left"></i></div>
              <div className="swiper-button-next"><i className="far fa-angle-double-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
