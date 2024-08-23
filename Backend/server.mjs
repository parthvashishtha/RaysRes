import fetch from "node-fetch";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import Form from "./models/form.js";
import dotenv from "dotenv";
dotenv.config();

// Define the Newsletter model
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//Checking email validity synax wise
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Rays_webpage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/api/submit-form", async (req, res) => {
  const { phone, name } = req.body;
  if (!phone || !name) {
    return res
      .status(400)
      .json({ error: "Phone number and name are required" });
  }

  const WATI_API_KEY = process.env.WATI_ACCESS_TOKEN;
  const url = `https://live-mt-server.wati.io/317559/api/v1/sendTemplateMessage?whatsappNumber=${encodeURIComponent(
    phone
  )}`;

  const body = {
    parameters: [
      { name: "phone_number", value: phone },
      { name: "name", value: name },
    ],
    template_name: "thankyou_text",
    broadcast_name: "Hello",
  };

  try {
    // saving formdata to db
    const formData = req.body;
    const newForm = new Form(formData);
    await newForm.save();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${WATI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    res.status(201).json({
      message: "Form submitted successfully and WhatsApp message sent!",
      data,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API endpoint to handle newsletter subscriptions
app.post("/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!isValidEmail) {
    return res.status(400).json({ message: "Email pattern is not valid" });
  }

  try {
    //checking if user already exists
    const existingUser = await Newsletter.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "You have already subscribed though this email" });
    }

    // Save email to MongoDB
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Subscription Confirmation",
      text: "Thank you for subscribing to our newsletter!",
      html: `
      <p>Welcome to Syon!</p>
      <p>We are a leading solar panel company dedicated to providing energy solutions specifically in rural areas. Our mission is to bring clean, affordable, and accessible energy to villages and remote areas.</p>
      <p>You can chat with us on our whatsapp chatbot using this link <a href="https://bit.ly/4epEuz2">Click Here</a></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({
      message:
        "Subscription successful! Check your email for a confirmation message.",
    });
  } catch (error) {
    console.error("Error handling subscription:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
