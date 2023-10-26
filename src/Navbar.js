import React from "react";
import './App.css';

function Navbar() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            <img src="https://moretasks.com/images/moretask-logo.webp" alt="logo" />
          </a>
          <ul className="nav-menu">
            <li><a href="https://moretasks.com/">Home</a></li>
            <li><a href="https://moretasks.com/services.html">Services</a></li>
            <li><a href="https://moretasks.com/product.html">Product</a></li>
            <li><a href="https://moretasks.com/why-us.html">Why Us?</a></li>
            <li><a href="https://moretasks.com/about-us.html">About Us</a></li>
          </ul>
          <ul className="contact">
            <li className="nav-button-wrapper">
              <a href="https://moretasks.com/contact.html" className="button-primary">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;