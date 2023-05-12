


import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from "../../utils/actions";
import './index.css'; // Import the CSS file for custom styles

function Nav() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="uk-no-bullet uk-flex">
          <li className="uk-no-bullet">
            <Link to="/signup" className="animated-icon">
              <FaUserPlus className="animated-icon" size={30} />
            </Link>
          </li>
          <li className="uk-no-bullet">
            <Link to="/login" className="uk-navbar-item">
              <FaSignInAlt className="animated-icon" size={30} />
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo">
          Timekeepers
        </Link>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <div className="uk-grid-small uk-flex uk-flex-right" uk-grid="true">
            <div className="uk-width-auto">
              {showNavigation()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;



