import React, { useState } from "react";

const FeedbackRating = () => {
  const [feedbackRating, setFeedbackRating] = useState({
    rate: "",
    improve: "",
    other: "",
    suggestion: "",
    email: "",
  });

  const handleChange = (e) => {
    setFeedbackRating((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ feedbackRating });
    const response = await fetch("http://localhost:5000/send-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feedbackRating }),
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
          rate: "",
          improve: "",
          other: "",
          suggestion: "",
          email: "",
        });
      });
  };

  return (
    <div className="feedback-container">
      <div className="page-title-service">Feedback Rating</div>
      <div className="feedback">
        <h2 className="feedback-header">We Value Your Feedback!</h2>
        <p className="feedback-subheader">
          Help us improve by sharing your thoughts
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Overall how would you rate your experience?(where 1 = Poor, 5 =
            Excellent)
          </label>
          <br />
          <select
            className="rating"
            name="rate"
            value={feedbackRating.rate}
            onChange={handleChange}>
            <option>Please select your rate</option>
            <option>1: Very Dissatisfied</option>
            <option>2: Dissatisfied</option>
            <option>3: Neutral</option>
            <option>4: Satisfied</option>
            <option>5: Very Satisfied</option>
          </select>
          <br />
          <label>Any specific areas we could improve</label>
          <br />
          <select
            className="rating"
            name="improve"
            value={feedbackRating.improve}
            onChange={handleChange}>
            <option>Please select an option</option>
            <option>Better User Interface</option>
            <option>More product options</option>
            <option>Improved response time</option>
            <option>Other(please specify)</option>
          </select>
          <br />
          <label>If chosen other, Please specify:</label>
          <input
            type="text"
            className="other rating"
            name="other"
            value={feedbackRating.other}
            onChange={handleChange}
          />
          <br />
          <label>Any other ideas or suggestions for us ?</label>
          <br />
          <textarea
            className="rate-textarea"
            name="suggestion"
            value={feedbackRating.suggestion}
            onChange={handleChange}></textarea>
          <br />
          <label>Would you like us to reach out to you ?</label>
          <br />
          <input
            type="email"
            className="rating"
            name="email"
            value={feedbackRating.email}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="rate-btn rating"
            value="Submit Feedback"
          />
        </form>
      </div>
    </div>
  );
};

export default FeedbackRating;
