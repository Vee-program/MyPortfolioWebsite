import React from "react";
import Background from "../Components/Background";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="home-container">
      <div className="b-container">
        <Background />
      </div>
      <div className="h-container">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
