import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="https://wa.me/0762730184">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu__item">
            <Link class="menu__link" to="/">
              Home
            </Link>
          </li>
          <li class="menu__item">
            <Link class="menu__link" to="/about">
              About Us
            </Link>
          </li>
          <li class="menu__item">
            <Link class="menu__link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li class="menu__item">
            <Link class="menu__link" to="/services">
              Services
            </Link>
          </li>
          <li class="menu__item">
            <Link class="menu__link" to="/feedbackrating">
              Feedback Rating
            </Link>
          </li>
          <li class="menu__item">
            <Link class="menu__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <p>
          &copy;2024 <span className="logo-name">K.R.I.A.T.E</span> Studios| All
          Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
