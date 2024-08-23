import React, { useState } from "react";
import "./form.css";
import formImg from "./form_img.png";
import axios from "axios";

const Form = () => {
  const [selectedForm, setSelectedForm] = useState("Address");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    email: "",
    bill: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFormSwitch = (form) => {
    setSelectedForm(form);
    setErrors({});
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleBillClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      bill: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";

    if (selectedForm === "WhatsApp") {
      if (!formData.phone) newErrors.phone = "WhatsApp Number is required";
      else if (!/^\d{10}$/.test(formData.phone))
        newErrors.phone = "WhatsApp Number must be 10 digits";
    } else if (selectedForm === "Address") {
      if (!formData.phone) newErrors.phone = "Phone Number is required";
      else if (!/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Phone Number must be 10 digits";
      if (!formData.pincode) newErrors.pincode = "Pin code is required";
      else if (!/^\d{6}$/.test(formData.pincode))
        newErrors.pincode = "Pin code must be 6 digits";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.bill)
        newErrors.bill = "Monthly Electricity Bill is required";
    }

    if (!formData.agreement)
      newErrors.agreement = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Include selectedForm in formData before validation
    const formDataWithSelectedForm = { ...formData, selectedForm };

    if (validate()) {
      try {
        // POST formDataWithSelectedForm to the backend
        const response = await axios.post(
          "/api/submit-form",
          formDataWithSelectedForm
        );
        alert(response.data.message);
        setFormData({
          name: "",
          phone: "",
          pincode: "",
          city: "",
          email: "",
          bill: "",
          agreement: false,
        });
        setSelectedForm("Address"); // Reset to default form tab
        setErrors({});
        setSubmitted(false);
      } catch (error) {
        console.error("There was an error submitting the form!", error);
      }
    }
  };

  const billRanges = [
    "Less than ₹1500",
    "₹1500 - ₹2500",
    "₹2500 - ₹4000",
    "₹4000 - ₹10000",
    "More than ₹10000 ",
  ];

  return (
    <div className="form-wrapper">
      <div className="left-text">
        <h1>
          Schedule a <span className="some_text">Free Consultation</span> with
          us today!
        </h1>
        <h7 className="some_text_below">
          Get genuine advice from our solar experts.
        </h7>
        <img src={formImg} alt="Consultation" className="consultation-image" />
      </div>
      <div className="form-container">
        <div className="form-tabs">
          <button
            className={`tab ${selectedForm === "Address" ? "active" : ""}`}
            onClick={() => handleFormSwitch("Address")}
          >
            Address
          </button>
          <button
            className={`tab ${selectedForm === "WhatsApp" ? "active" : ""}`}
            onClick={() => handleFormSwitch("WhatsApp")}
          >
            WhatsApp
          </button>
        </div>

        {selectedForm === "Address" && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={submitted && errors.name ? "error" : ""}
                placeholder="Enter Your Name"
              />
              {submitted && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={submitted && errors.phone ? "error" : ""}
                placeholder="Enter Your Phone Number"
              />
              {submitted && errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="bill">
                Monthly Electricity Bill <span className="required">*</span>
              </label>
              <div className="bill-buttons">
                {billRanges.map((range) => (
                  <button
                    type="button"
                    key={range}
                    className={formData.bill === range ? "selected" : ""}
                    onClick={() => handleBillClick(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {submitted && errors.bill && (
                <span className="error-message">{errors.bill}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={submitted && errors.city ? "error" : ""}
                  placeholder="Enter Your City"
                />
                {submitted && errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="pincode">
                  Pin code <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={submitted && errors.pincode ? "error" : ""}
                  placeholder="Enter Pincode"
                />
                {submitted && errors.pincode && (
                  <span className="error-message">{errors.pincode}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              <label htmlFor="agreement">
                I agree to Syon's <a href="#">terms of service</a> &{" "}
                <a href="#">privacy policy</a>
              </label>
              {submitted && errors.agreement && (
                <span className="error-message">{errors.agreement}</span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}

        {selectedForm === "WhatsApp" && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={submitted && errors.name ? "error" : ""}
                placeholder="Enter Your Name"
              />
              {submitted && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                WhatsApp Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={submitted && errors.phone ? "error" : ""}
                placeholder="Enter WhatsApp No."
              />
              {submitted && errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              <label htmlFor="agreement">
                I agree to Syon's <a href="#">terms of service</a> &{" "}
                <a href="#">privacy policy</a>
              </label>
              {submitted && errors.agreement && (
                <span className="error-message">{errors.agreement}</span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
