import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const SliderArea = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.home-slider-1 .swiper-container', {
      loop: true,
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
    <div className="slider-area">
      <div className="swiper-container home-slider-1">
        <div className="swiper-wrapper">
          <div className="swiper-slide single-slide">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="slider-content-1">
                    <span data-animation="fadeInUp" data-delay="0.3s">
                      Making Different Form Others
                    </span>
                    <h2 data-animation="fadeInUp" data-delay="0.6s">Build A Perfect Health Growth</h2>
                    <a href="#contact" className="btn btn-gra" data-animation="fadeInUp" data-delay="0.9s">
                      join with us
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="slide-thumb-1">
              <img src="assets/img/gallery/athletic.png" alt="thumb"/>
            </div>
                </div>
              </div>
            
            <div className="slide-shape-1">
              <img src="assets/img/shape/shape-29.png" alt="shape" />
            </div>
            <div className="slide-shape-2">
              <img src="assets/img/shape/shape-30.png" alt="shape" />
            </div>
            {/* <div className="slide-thumb-1">
              <img src="assets/img/gallery/athletic.png" alt="thumb"/>
            </div> */}
            </div>
          </div>
          <div className="swiper-slide single-slide">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-8 col-xl-6">
                  <div className="slider-content-1">
                    <span data-animation="fadeInUp" data-delay="0.3s">
                      Form Others
                    </span>
                    <h2 data-animation="fadeInUp" data-delay="0.6s">Build A Perfect Health Growth</h2>
                    <a href="#contact" className="btn btn-gra" data-animation="fadeInUp" data-delay="0.9s">
                      join with us
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-shape-1">
              <img src="assets/img/shape/shape-29.png" alt="shape" />
            </div>
            <div className="slide-shape-2">
              <img src="assets/img/shape/shape-30.png" alt="shape" />
            </div>
            <div className="slide-thumb-1" data-animation="fadeInRight" data-delay="0.3s">
              <img src="assets/img/thumb/thumb-29.png" alt="thumb" />
            </div>
          </div>
          <div className="swiper-slide single-slide">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-8 col-xl-6">
                  <div className="slider-content-1">
                    <span data-animation="fadeInUp" data-delay="0.3s">
                      Different Form Others
                    </span>
                    <h2 data-animation="fadeInUp" data-delay="0.6s">Build A Perfect Health Growth</h2>
                    <a href="#contact" className="btn btn-gra" data-animation="fadeInUp" data-delay="0.9s">
                      join with us
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-shape-1">
              <img src="assets/img/shape/shape-29.png" alt="shape" />
            </div>
            <div className="slide-shape-2">
              <img src="assets/img/shape/shape-30.png" alt="shape" />
            </div>
            <div className="slide-thumb-1" data-animation="fadeInRight" data-delay="0.3s">
              <img src="assets/img/thumb/thumb-29.png" alt="thumb" />
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"><i className="far fa-angle-left"></i></div>
        <div className="swiper-button-next"><i className="far fa-angle-right"></i></div>
      </div>
    </div>
  );
};

export default SliderArea;
