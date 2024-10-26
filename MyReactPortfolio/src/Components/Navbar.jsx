import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/logo.png";
import image2 from "../assets/logo-name.png";

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
          <Link to="/projects">
            <li className="list-item">PORTFOLIO</li>
          </Link>
          <Link to="/skills">
            <li className="list-item">SERVICES</li>
          </Link>
          <Link to="/contact">
            <li>
              <button className="contact-btn">Contact</button>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
