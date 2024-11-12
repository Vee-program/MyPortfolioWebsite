import express from "express";
import nodemailer from "nodemailer";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
