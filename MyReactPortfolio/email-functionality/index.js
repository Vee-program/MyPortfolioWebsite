const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  const htmlContent = `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="text-align: center; color: #4CAF50;">Thank You for Reaching Out!</h2>

  <p style="margin-bottom: 15px;">
    Hi ${req.body.formData.name},
  </p>

  <p style="margin-bottom: 15px;">
    Thank you for contacting us! We have received your message and appreciate you taking the time to reach out. Our team will review your inquiry and get back to you as soon as possible.
  </p>

  <p style="margin-bottom: 15px;">
    Here's a summary of your message:
  </p>

  <div style="padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
    <p><strong>Name:</strong> ${req.body.formData.name}</p>
    <p><strong>Email:</strong> ${req.body.formData.email}</p>
    <p><strong>Subject:</strong> ${req.body.formData.subject}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; padding: 10px; background-color: #fff; border: 1px solid #eee; border-radius: 5px;">${req.body.formData.message}</p>
  </div>

  <p style="margin-top: 20px;">
    We'll be in touch soon. If you have any additional questions contact us at kriatestudios@yahoo.com
  </p>

  <p style="margin-top: 20px;">
    Best regards,<br>
    K.R.I.A.T.E Studios Team
  </p>
</div>
`;

  let mailOptions = {
    from: `${req.body.formData.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.formData.email}`,
    text: `${req.body.formData.message}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json;
      status: "fail";
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }

    let userMailOptions = {
      from: process.env.EMAIL,
      to: `${req.body.formData.email}`,
      subject: "Thank you for contacting K.R.I.A.T.E Studios",
      html: htmlContent,
    };

    transporter.sendMail(userMailOptions, function (err, data) {
      if (err) {
        res.json;
        status: "fail";
      } else {
        console.log("== Message Sent to User ==");
        res.json({
          status: "Auto-reply sent:" + data.response,
        });
      }
    });
  });
});

app.post("/send-request", function (req, res) {
  const htmlEmail = `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="text-align: center; color: #4CAF50;">Service Request Received</h2>

  <p style="margin-bottom: 15px;">
    Hi ${req.body.requestForm.name},
  </p>

  <p style="margin-bottom: 15px;">
    Thank you for contacting us! We have received your service request and our team is reviewing it. You'll hear back from us as soon as possible.
  </p>

  <p style="margin-bottom: 15px;">
    Here's a summary of your request:
  </p>

  <div style="padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
    <p><strong>Name:</strong> ${req.body.requestForm.name}</p>
    <p><strong>Email:</strong> ${req.body.requestForm.email}</p>
    <p><strong>Phone:</strong> ${req.body.requestForm.phonenumber}</p>
     <p><strong>Budget:</strong> ${req.body.requestForm.budget}</p>
     <p><strong>Project Timeline:</strong> ${req.body.requestForm.timeline}</p>
      <p><strong>Type of service:</strong> ${req.body.requestForm.service}</p>
       <p><strong>Type of Webapplication:</strong> ${req.body.requestForm.webapplication}}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; padding: 10px; background-color: #fff; border: 1px solid #eee; border-radius: 5px;">${req.body.requestForm.details}</p>
  </div>

  <p style="margin-top: 20px;">
    We'll be in touch soon. If you have any additional questions in the meantime, feel free to reply to this email or contact us at  kriatestudios@yahoo.com
  </p>

  <p style="margin-top: 20px;">
    Best regards,<br>
    K.R.I.A.T.E Studios Team
  </p>
</div>`;

  let mailOptions = {
    from: `${req.body.requestForm.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.requestForm.email}`,
    text: `${req.body.requestForm.phonenumber}
    ${req.body.requestForm.budget}
    ${req.body.requestForm.service}
    ${req.body.requestForm.webapplication}
    ${req.body.requestForm.suggestion}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json;
      status: "fail";
    } else {
      console.log("== Service Request Sent ==");
      res.json({
        status: "success",
      });
    }

    let userMailOptions = {
      from: process.env.EMAIL,
      to: `${req.body.requestForm.email}`,
      subject: "Thank you for contacting KRIATE Studios",
      html: htmlEmail,
    };

    transporter.sendMail(userMailOptions, function (err, data) {
      if (err) {
        res.json;
        status: "fail";
      } else {
        console.log("== Message Sent ==");
        res.json({
          status: "Auto-reply sent:" + data.response,
        });
      }
    });
  });
});

app.post("/send-feedback", function (req, res) {
  let mailOptions = {
    from: `${req.body.feedbackRating.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.feedbackRating.email}`,
    text: `${req.body.feedbackRating.rate}
    ${req.body.feedbackRating.improve}
    ${req.body.feedbackRating.details}
    ${req.body.feedbackRating.email}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json;
      status: "fail";
    } else {
      console.log("== Feedback Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
