import React from "react";
import salon from "../assets/salon.jpg";
import doctor from "../assets/doctor.jpg";
import mentalhealth from "../assets/mentalhealth.jpg";
import commerce from "../assets/e-commerce.jpg";
import tutor from "../assets/tutor.jpg";

const Portfolio = () => {
  return (
    <div className="project-page">
      <div className="page-title">Portfolio</div>
      <div className="projects-container">
        <div className="image-container">
          <div className="slide" id="slide_1">
            <figure className="hover-img">
              <img src={salon} alt="" id="img1" />
              <figcaption>
                <h3>Thuli's Salon</h3>
                <p>Website</p>
              </figcaption>
            </figure>
          </div>
          <div className="slide" id="slide_2">
            <figure className="hover-img">
              <img src={mentalhealth} alt="" id="img2" />
              <figcaption>
                <h3>Thuli's Salon</h3>
                <p>Website</p>
              </figcaption>
            </figure>
          </div>
          <div className="slide" id="slide_3">
            <figure className="hover-img">
              <img src={tutor} alt="" id="img3" />
              <figcaption>
                <h3>Thuli's Salon</h3>
                <p>Website</p>
              </figcaption>
            </figure>
          </div>
          <div className="slide" id="slide_4">
            <figure className="hover-img">
              <img src={doctor} alt="" id="img4" />
              <figcaption>
                <h3>Thuli's Salon</h3>
                <p>Website</p>
              </figcaption>
            </figure>
          </div>
          <div className="slide" id="slide_5">
            <figure className="hover-img">
              <img src={commerce} alt="" id="img5" />
              <figcaption>
                <h3>Thuli's Salon</h3>
                <p>Website</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
