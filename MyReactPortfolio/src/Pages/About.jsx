import React from "react";
import image from "../assets/portfolio-image.jpg";

const About = () => {
  return (
    <div className="abt-container">
      <div className="left">
        <img
          src={image}
          alt="developer profile photo"
          className="portfolio-image"
        />
      </div>
      <div className="right">
        <div className="static-text"> I'm a </div>
        <ul className="dynamic-texts">
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Poet</span>
          </li>
          <li>
            <span>Problem Solver</span>
          </li>
          <li>
            <span>Perfectionist</span>
          </li>
          <li>
            <span>Creative Thinker</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
        </ul>
        <div className="paragraph-container">
          <p>
            Hello! I'm Thembelihle, a passionate web developer and software
            enthusiast. My journey in tech started with a deep curiosity about
            how websites and applications work behind the scenes. Over time,
            I've developed skills in HTML, CSS, JavaScript, and React, and I've
            completed several projects ranging from weather apps to e-commerce
            platforms. I thrive on turning creative ideas into functional and
            user-friendly digital experiences. My approach to development is
            rooted in problem-solving, attention to detail, and a drive to learn
            and adapt. Whether it's building responsive layouts or integrating
            API functionalities, I aim to create solutions that are not only
            visually appealing but also efficient and intuitive. In addition to
            my individual projects, I'm proud to collaborate with TechGirlsHub,
            a group of women breaking into tech. Together, we freelance to build
            websites and apps that solve real-world problems, from enhancing
            user experiences to developing innovative solutions for businesses.
            Currently, I'm focused on expanding my skill set in front-end and
            back-end development, with the goal of becoming a full-stack
            developer. I'm also passionate about contributing to the tech
            community and empowering others to break into the industry. Feel
            free to explore my portfolio to see some of the exciting projects
            I've worked on. I'm always open to new opportunities and
            collaborations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
