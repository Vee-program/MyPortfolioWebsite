import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu-icon.png";
import close from "../assets/close.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState({ display: "none" });

  const toggleMenu = () => {
    setShowMenu({ display: "block" });
  };

  const removeMenu = () => {
    setShowMenu({ display: "none" });
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <div className="nav-container">
      <nav>
        <ul className="list-container">
          <li className="logo">
            <span className="logo-1">K.R.I.A.T.E</span>
            <span className="logo-2">Studios</span>
          </li>
          <Link to="/">
            <li className="list-item hideOnMobile">HOME</li>
          </Link>
          <Link to="/about">
            <li className="list-item hideOnMobile">ABOUT US</li>
          </Link>
          <Link to="/portfolio">
            <li className="list-item hideOnMobile">PORTFOLIO</li>
          </Link>
          <Link to="/services">
            <li className="list-item hideOnMobile">SERVICES</li>
          </Link>
          <Link to="/feedbackrating">
            <li className="list-item hideOnMobile">FEEDBACK RATING</li>
          </Link>
          <li>
            <img
              src={menu}
              alt="hamburger icon"
              className="hamburger"
              onClick={toggleMenu}
            />
          </li>
          <ul className="sidebar" style={showMenu}>
            <li>
              <img
                src={close}
                alt="close icon"
                className="close-icon"
                onClick={removeMenu}
              />
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
            <Link to="/contact">
              <li>
                <button className="contact-btn">
                  <span>C</span>
                  <span>o</span>ntact
                </button>
              </li>
            </Link>
          </ul>
          <Link to="/contact">
            <li className="hideOnMobile">
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
