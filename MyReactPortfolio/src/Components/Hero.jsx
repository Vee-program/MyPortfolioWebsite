import React from "react";
import image from "../assets/hero-image.png";
import Card from "./Card";

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
    </div>
  );
};

export default Hero;
