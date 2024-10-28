import React from "react";

const Contact = () => {
  return (
    <div contact-container>
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
          <label>Message</label>
          <br />
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
