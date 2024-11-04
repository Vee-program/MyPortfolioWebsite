import React from "react";

const FeedbackRating = () => {
  return (
    <div className="feedback-container">
      <div className="page-title-service">Feedback Rating</div>
      <div className="feedback">
        <h2 className="feedback-header">We Value Your Feedback!</h2>
        <p className="feedback-subheader">
          Help us improve by sharing your thoughts
        </p>
        <label>
          Overall how would you rate your experience?(where 1 = Poor, 5 =
          Excellent)
        </label>
        <br />
        <select className="rating" name="rate">
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
        <select className="rating" name="improve">
          <option>Please select an option</option>
          <option>Better User Interface</option>
          <option>More product options</option>
          <option>Improved response time</option>
          <option>Other(please specify)</option>
        </select>
        <br />
        <label>If chosen other, Please specify:</label>
        <input type="text" className="other rating" name="other" />
        <br />
        <label>Any other ideas or suggestions for us ?</label>
        <br />
        <textarea className="rate-textarea" name="suggestion"></textarea>
        <br />
        <label>Would you like us to reach out to you ?</label>
        <br />
        <input type="email" className="rating" name="email" />
        <input
          type="submit"
          className="rate-btn rating"
          value="Submit Feedback"
        />
      </div>
    </div>
  );
};

export default FeedbackRating;
