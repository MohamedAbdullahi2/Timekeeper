import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo1.png";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory" className="nav-link">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" className="nav-link" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Timekeepers" />
        <span>Timekeepers</span>
      </Link>
      <nav className="nav">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
