import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>About Us</h3>
            <p>We are a leading online store for all your shopping needs.</p>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 555-555-5555</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
