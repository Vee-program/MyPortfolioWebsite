import React, { useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import Footer from "../Components/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ formData });
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setFormData({
          email: "",
          name: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <div className="contact-page">
      <div className="page-title">Contact</div>
      <h1 className="contact-header">Ready to bring ideas to life ?</h1>
      <p className="contact-subheader">
        I'm excited to hear from you and explore how we can work together. Let's
        chat!
      </p>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            className="contact-input"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            className="contact-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <br />
          <label>Subject</label>
          <br />
          <input
            type="text"
            className="contact-input"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
          <br />
          <label>Message</label>
          <br />
          <textarea
            className="contact-textarea"
            name="message"
            onChange={handleChange}
            value={formData.message}></textarea>
          <br />
          <input type="submit" value="Send Message" className="button" />
        </form>
      </div>
      <div className="icon-container">
        <a href="https://wa.me/0762730184">
          <div className="icon">
            <p>Contact us:</p>
            <img src={whatsapp} alt="whatsapp icon" className="icon-image" />
          </div>
        </a>
        <a href="mailto:kriatestudios@yahoo.com">
          <div className="icon">
            <p>Contact us:</p>
            <img src={email} alt="email icon" className="icon-image" />
          </div>
        </a>
        <div className="icon">
          <p>Follow us on:</p>
          <img src={instagram} alt="instagram icon" className="icon-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
