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
      <div className="projects-container tracker-wrapper">
        <div className="image-container tracker">
          <div className="slide" id="slide_1">
            <li className="tracker-item">
              <figure className="hover-img">
                <img src={salon} alt="" id="img1" />
                <figcaption>
                  <h3>HAIR,NAILS AND MASSAGE SPA</h3>
                  <p>Website</p>
                </figcaption>
              </figure>
            </li>
          </div>
          <div className="slide" id="slide_2">
            <li className="tracker-item">
              <figure className="hover-img">
                <img src={mentalhealth} alt="" id="img2" />
                <figcaption>
                  <h3>MENTAL & HOLISTIC HEALTH</h3>
                  <p>Website</p>
                </figcaption>
              </figure>
            </li>
          </div>
          <div className="slide" id="slide_3">
            <li className="tracker-item">
              <figure className="hover-img">
                <img src={tutor} alt="" id="img3" />
                <figcaption>
                  <h3>DANCE TUTOR</h3>
                  <p>Website</p>
                </figcaption>
              </figure>
            </li>
          </div>
          <div className="slide" id="slide_4">
            <li className="tracker-item">
              <figure className="hover-img">
                <img src={doctor} alt="" id="img4" />
                <figcaption>
                  <h3>DETIST</h3>
                  <p>Website</p>
                </figcaption>
              </figure>
            </li>
          </div>
          <div className="slide" id="slide_5">
            <li className="tracker-item">
              <figure className="hover-img">
                <img src={commerce} alt="" id="img5" />
                <figcaption>
                  <h3>CLOTHING E-COMMERCE</h3>
                  <p>Website</p>
                </figcaption>
              </figure>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
