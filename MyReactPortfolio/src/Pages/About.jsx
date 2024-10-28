import React from "react";
import image from "../assets/portfolio-image.jpg";
import snippet from "../assets/snippet.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <div className="portfolio-image">
        <img
          src={image}
          alt="a woman wearing a blue blazer"
          className="profile-pic"
        />
        <img
          src={snippet}
          alt="snippet of a source code of one of our projects"
          className="snippet-work"
        />
      </div>
      <div className="big-container">
        <div className="abt-container">
          <h1 className="heading">About Us</h1>
          <p className="paragraph">
            Welcome to <span className="logo-name">K.R.I.A.T.E</span> Studios,
            where we specialize in crafting impactful, highly functional
            websites for small businesses and entrepreneurs. Our focus is on
            supporting innovators and visionaries with the goal of helping them
            succeed in today's competitive market. Founded on the belief that
            digital solutions should address real-world challenges, we create
            projects that not only elevate brands but also provide meaningful
            solutions that empower our clients to grow and thrive.
          </p>
        </div>
        <div className="abt-container">
          <h1 className="heading">Our Mission</h1>
          <p className="paragraph">
            Our mission is simple yet powerful: to design and deliver websites
            that make a difference. We're driven by the purpose of solving
            real-world problems, bringing innovative solutions to businesses and
            entrepreneurs that enhance their reach, simplify their processes,
            and contribute to their success. At{" "}
            <span className="logo-name">K.R.I.A.T.E</span> Studios, we are
            passionate about creating digital experiences that genuinely improve
            people's lives and bring clients closer to their goals.
          </p>
        </div>
        <div className="abt-container">
          <h1 className="heading">What Makes Us Unique</h1>
          <p className="paragraph">
            We believe that exceptional websites are built through
            collaboration. At <span className="logo-name">K.R.I.A.T.E</span>{" "}
            Studios, we work closely with our clients every step of the way,
            ensuring that each project is aligned with their brand vision and
            goals. Our focus on responsiveness guarantees that every website
            functions seamlessly across devices, providing a flawless experience
            for all users. Our designs are clean, modern, and tailored
            specifically to reflect each client's unique identity, ensuring
            their brand stands out in the digital space.
          </p>
        </div>
        <div className="abt-container">
          <h1 className="heading">Our Background</h1>
          <p className="paragraph">
            With a background in web development and project management, we
            bring the technical skills and industry insight necessary to create
            effective digital solutions. Our experience spans HTML, CSS,
            JavaScript, React, API integrations,MongoDB, ExpressJs, NodeJs and
            more, equipping us to build websites that are not only visually
            engaging but also robust and efficient. As a proud partner with
            TechGirlsHub, a community supporting women in tech, we are committed
            to promoting inclusivity and innovation within the tech industry.
          </p>
        </div>
      </div>
      <div className="impact-container">
        <p className="impact">
          Ready to make an impact?{" "}
          <Link to="/contact">
            <span className="reach-out">Contact Us</span>
          </Link>{" "}
          today, and let's discuss how we can bring your vision to life with a
          website that truly represents your brand.
        </p>
      </div>
    </div>
  );
};

export default About;
