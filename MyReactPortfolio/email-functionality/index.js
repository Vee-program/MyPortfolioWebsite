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
      subject: "Thank you for contacting KRIATE Studios",
      text: "Thank you for contacting us. We'll get back to you soon.",
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

app.post("/send-request", function (req, res) {
  let mailOptions = {
    from: `${req.body.requestForm.email}`,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.requestForm.email}`,
    text: `${req.body.requestForm.phonenumber}
    ${req.body.requestForm.budget}
    ${req.body.requestForm.service}
    ${req.body.requestForm.webapplication}
    ${req.body.requestForm.details}`,
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
      text: `Hello ${req.body.requestForm.name} Thanks for reaching out. I am excited to hear more about your project and see how we can bring it to life.Let's schedule a time to chat about your vision!`,
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
