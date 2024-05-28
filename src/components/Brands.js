import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const Brands = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.brand-slider .swiper-container', {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        992: {
          slidesPerView: 6
        },
        768: {
          slidesPerView: 4
        },
        576: {
          slidesPerView: 2
        }
      }
    });
  }, []);

  return (
    <div className="brand-area pt-70 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="brand-slider">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-1.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-2.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-3.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-4.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-5.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-6.png" alt="brand" />
                    </div>
                  </div>
                  <div className="swiper-slide single-slide">
                    <div className="brand-wrap">
                      <img src="assets/img/brand/brand-1.png" alt="brand" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
