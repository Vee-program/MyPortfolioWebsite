import React from "react";
import image from "../assets/hero-image.png";
import Card from "./Card";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="hero-container overlay"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <Card />
      <div className="btn-container">
        <Button />
      </div>
    </div>
  );
};

export default Hero;
