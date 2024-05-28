import React from 'react';
import Brands from './Brands';

function Blog() {
  return (
    
    <main>
  
    <div className="blog-content-area pt-130 pb-130">
      <div className="container">
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
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="blog-pagination mt-50">
              <ul>
                <li>
                  <a className="prev page-numbers" href="#">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li><span className="page-numbers current">01</span></li>
                <li><a className="page-numbers" href="blog.html">02</a></li>
                <li><a className="page-numbers" href="blog.html">03</a></li>
                <li>
                  <a className="next page-numbers" href="blog.html">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Brands />
  </main>
  );
}

export default Blog;
