import React from 'react';
import "../Footer/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>About Us</h3>
            <p>We are a leading online store for watches shopping needs.</p>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Email: info@timekeeprs.com</p>
            <p>Phone: 555-555-5555</p>
            <p>Address: 1000 Any St,  Ottawa Canada</p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Twitter Feed</h3>
            <a className="twitter-timeline" href="https://twitter.com/TwitterDev">Tweets by TwitterDev</a> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
