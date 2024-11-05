import React from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu-icon.png.";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="list-container">
          <li>
            <span className="logo-1">K.R.I.A.T.E</span>
            <span className="logo-2">Studios</span>
          </li>
          <Link to="/">
            <li className="list-item">HOME</li>
          </Link>
          <Link to="/about">
            <li className="list-item">ABOUT US</li>
          </Link>
          <Link to="/portfolio">
            <li className="list-item">PORTFOLIO</li>
          </Link>
          <Link to="/services">
            <li className="list-item">SERVICES</li>
          </Link>
          <Link to="/feedbackrating">
            <li className="list-item">FEEDBACK RATING</li>
          </Link>
          <li>
            <img src={menu} alt="hamburger icon" />
          </li>
          <Link to="/contact">
            <li>
              <button className="contact-btn">
                <span>C</span>
                <span>o</span>ntact
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
