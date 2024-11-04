import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/portfolio">
        <button className="portfolio-btn">Explore Our Portfolio</button>
      </Link>
      <Link to="/contact">
        <button className="call-btn">Get in touch</button>
      </Link>
    </div>
  );
};

export default Button;
