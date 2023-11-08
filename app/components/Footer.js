import React from 'react'

const Footer = () => {
  return (
    <><footer className="main-footer">
          <div className="footer-top">
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12 big-column">
                          <div className="row clearfix">
                              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                                  <div className="footer-widget logo-widget">
                                      <figure className="footer-logo"><a href="/"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                                  <div className="footer-widget links-widget">
                                      <div className="widget-title">
                                          <h3>Category</h3>
                                      </div>
                                      <div className="widget-content">
                                          <ul className="links-list clearfix">
                                              <li><a href="/">Men</a></li>
                                              <li><a href="/">Women</a></li>
                                              <li><a href="/">Kids</a></li>
                                              <li><a href="/">Accessories</a></li>
                                              <li><a href="/">Shoe</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                                  <div className="footer-widget links-widget">
                                      <div className="widget-title">
                                          <h3>Useful Link</h3>
                                      </div>
                                      <div className="widget-content">
                                          <ul className="links-list clearfix">
                                              <li><a href="/">News &amp; Tips</a></li>
                                              <li><a href="/">About Us</a></li>
                                              <li><a href="/">Terms &amp; Conditions</a></li>
                                              <li><a href="/">Our Shop</a></li>
                                              <li><a href="/">Contact Us</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 big-column">
                          <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget contact-widget">
                                      <div className="widget-title">
                                          <h3>Contact</h3>
                                      </div>
                                      <ul className="info-list clearfix">
                                          <li>4708 Ruecker Wall, <br />Kassandratown, HI</li>
                                          <li><a href="tel:23055873407">+2(305) 587-3407</a></li>
                                          <li><a href="mailto:info@example.com">info@example.com</a></li>
                                      </ul>
                                      <ul className="footer-social clearfix">
                                          <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                          <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                          <li><a href="/"><i className="fab fa-vimeo-v" /></a></li>
                                          <li><a href="/"><i className="fab fa-google-plus-g" /></a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget newsletter-widget">
                                      <div className="widget-title">
                                          <h3>Newsletter</h3>
                                      </div>
                                      <div className="widget-content">
                                          <p>4708 Ruecker Wall, Kassandratown, HI 97729</p>
                                          <form action="https://azim.commonsupport.com/Castro/contact.html" method="post" className="newsletter-form">
                                              <div className="form-group">
                                                  <input type="email" name="email" placeholder="Enter your email" required />
                                                  <button type="submit" className="theme-btn-two">Subscribe</button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-bottom">
              <div className="auto-container clearfix">
                  <ul className="cart-list pull-left clearfix">
                      <li><a href="/"><img src="assets/images/resource/card-1.png" alt="" /></a></li>
                      <li><a href="/"><img src="assets/images/resource/card-2.png" alt="" /></a></li>
                      <li><a href="/"><img src="assets/images/resource/card-3.png" alt="" /></a></li>
                      <li><a href="/"><img src="assets/images/resource/card-4.png" alt="" /></a></li>
                  </ul>
                  <div className="copyright pull-right">
                      <p><a href="/">Castro</a> © 2020 All Right Reserved</p>
                  </div>
              </div>
          </div>
      </footer><button className="scroll-top scroll-to-target" data-target="html">
              <i className="fas fa-long-arrow-alt-up" />
          </button></>
  )
}

export default Footer