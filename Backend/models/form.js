const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  pincode: {
    type: String,
    required: function () {
      return this.selectedForm === "Address";
    },
    match: /^\d{6}$/,
  },
  city: {
    type: String,
    required: function () {
      return this.selectedForm === "Address";
    },
  },
  email: {
    type: String,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  bill: {
    type: String,
    required: function () {
      return this.selectedForm === "Address";
    },
  },
  agreement: {
    type: Boolean,
    required: true,
  },
  selectedForm: {
    type: String,
    enum: ["Address", "WhatsApp"],
    required: true,
  },
});

module.exports = mongoose.model("Form", formSchema);
