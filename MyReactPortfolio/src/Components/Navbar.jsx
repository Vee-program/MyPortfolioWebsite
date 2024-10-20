import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="list-container">
          <li>
            <img src={image} alt="logo image" className="logo" />
          </li>
          <Link to="/">
            <li className="list-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="list-item">About</li>
          </Link>
          <Link to="/projects">
            <li className="list-item">Projects</li>
          </Link>
          <Link to="/skills">
            <li className="list-item">Skills</li>
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
