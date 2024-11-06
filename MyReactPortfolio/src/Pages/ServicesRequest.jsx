import React, { useState } from "react";

const ServicesRequest = () => {
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    budget: "",
    timeline: "",
    service: "",
    webapplication: "",
    details: "",
  });

  const handleChange = (e) => {
    setRequestForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ requestForm });
    const response = await fetch("http://localhost:5000/send-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestForm }),
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
        setRequestForm({
          name: "",
          email: "",
          phonenumber: "",
          budget: "",
          timeline: "",
          service: "",
          webapplication: "",
          details: "",
        });
      });
  };
  return (
    <div className="servicerequest">
      <div className="page-title-service">Service Request Form</div>
      <div className="servicerequest-form">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            className="service-input"
            placeholder="Enter your name"
            name="name"
            value={requestForm.name}
            onChange={handleChange}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            className="service-input"
            placeholder="Enter your email"
            name="email"
            value={requestForm.email}
            onChange={handleChange}
          />
          <br />
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            className="service-input"
            placeholder="123-456-7890"
            name="phoneNumber"
            value={requestForm.phonenumber}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            title="Format: 123-456-7890"
          />
          <br />
          <label>Budget range:</label>
          <br />
          <select
            className="service-input"
            name="budget"
            value={requestForm.budget}
            onChange={handleChange}>
            <option className="default-option">
              Please select your budget
            </option>
            <option>R1000-R2500</option>
            <option>R2500 - R5000</option>
            <option>R5000 - R10000</option>
            <option>R10000+</option>
          </select>
          <br />
          <label>Choose Your Project Timeline:</label>
          <br />
          <select
            className="service-input"
            name="service"
            value={requestForm.timeline}
            onChange={handleChange}>
            <option>Please choose your project timeline</option>
            <option> 1 month - small projects</option>
            <option> 2 months - medium projects</option>
            <option>3 months - complex, feature-rich projects</option>
            <option>4-6months - fully customized, large-scope projects</option>
          </select>
          <br />
          <br />
          <label>Type of service</label>
          <br />
          <select
            className="service-input"
            name="service"
            value={requestForm.service}
            onChange={handleChange}>
            <option className="default-option">
              Please select a type of service
            </option>
            <option>Web design and Web Development</option>
            <option>Brand strategy and design</option>
            <option>E-commerce solutions</option>
            <option>Website maintainace and support</option>
            <option>SEO and content Optimization</option>
          </select>
          <br />
          <label>If Web Application, Choose type:</label>
          <br />
          <select
            className="service-input"
            name="webApplication"
            value={requestForm.webapplication}
            onChange={handleChange}>
            <option className="default-option">
              Please select a type of web application
            </option>
            <option>E-commerce</option>
            <option>Educational platforms</option>
            <option>Portfolio or Showcase Website</option>
            <option>Business Website</option>
            <option>Booking or Reservation System</option>
            <option>Personal Finance or Budget tool</option>
            <option>Online Polling or Survey</option>
          </select>
          <br />
          <label>Project Details or any Specific requirements</label>
          <br />
          <textarea
            className="service-textarea"
            name="details"
            value={requestForm.details}
            onChange={handleChange}></textarea>
          <br />
          <button className="servicerequest-btn">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default ServicesRequest;
