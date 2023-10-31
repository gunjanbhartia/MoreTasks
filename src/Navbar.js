import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            <img src="https://moretasks.com/images/moretask-logo.webp" alt="logo" />
          </a>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/why-us">Why Us?</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
          <ul className="contact">
            <li className="nav-button-wrapper">
              <Link to="/contact-us" className="button-primary">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;