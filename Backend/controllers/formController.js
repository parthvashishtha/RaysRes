const Form = require("../models/form");

exports.submitForm = async (req, res) => {
  try {
    const { name, phone, pincode, city, email, bill, agreement, selectedForm } =
      req.body;

    // Validate form data
    if (!name) return res.status(400).json({ error: "Full Name is required" });
    if (!phone)
      return res.status(400).json({ error: "Phone Number is required" });
    if (!/^\d{10}$/.test(phone))
      return res.status(400).json({ error: "Phone Number must be 10 digits" });

    if (selectedForm === "Address") {
      if (!pincode)
        return res.status(400).json({ error: "Pin code is required" });
      if (!/^\d{6}$/.test(pincode))
        return res.status(400).json({ error: "Pin code must be 6 digits" });
      if (!city) return res.status(400).json({ error: "City is required" });
      if (!bill)
        return res
          .status(400)
          .json({ error: "Monthly Electricity Bill is required" });
    }

    if (!agreement)
      return res.status(400).json({ error: "You must agree to the terms" });

    // Create new form document
    const newForm = new Form({
      name,
      phone,
      pincode,
      city,
      email,
      bill,
      agreement,
      selectedForm,
    });

    // Saving form to db
    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
