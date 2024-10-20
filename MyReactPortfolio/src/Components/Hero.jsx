import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1 className="headline">Building Modern, Scalable Web Applications</h1>
      <p className="subheadline">
        I build fast, responsive websites and web apps that solve real-world
        problems
      </p>
      <div className="btn-container">
        <Link to="/projects">
          <button className="project-btn">Expore My Projects</button>
        </Link>
        <Link to="/contact">
          <button className="call-btn">Let's Build Something Awesome!</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
