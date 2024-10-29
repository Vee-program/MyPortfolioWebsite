import React from "react";
import whatsapp from "..assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <div contact-container>
      <div className="page-title">Contact</div>
      <h1 className="contact-header">Ready to bring ideas to life ?</h1>
      <p className="contact-subheader">
        I'm excited to hear from you and explore how we can work together. Let's
        chat!
      </p>
      <div className="contact-container">
        <form>
          <label>Name</label>
          <br />
          <input type="name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Subject</label>
          <br />
          <input type="text" />
          <br />
          <label>Message</label>
          <br />
          <textarea></textarea>
          <br />
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div className="icon-container">
        <div className="icon">
          <img src={email} alt="email icon" className="icon/" />
          <p>Contact Us at:</p>
          <p>kriatestudios@gmail.com</p>
        </div>
        <div className="icon">
          <img src={whatsapp} alt="whatsapp icon" className="icon/" />
          <p>Contact us at:</p>
          <p>079447689</p>
        </div>
        <div className="icon">
          <img src={instagram} alt="instagram icon" className="icon/" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
