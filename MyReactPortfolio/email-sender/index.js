import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Sending an email example
transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: { email },
  subject: { rate },
  text: { suggestion },
}),
  (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Email sent:", info.response);
    }
  };
