const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    categories: {
      type: mongoose.Types.ObjectId,
      ref: "Categories",
    },
    color: {
      type: String,
      required: true,
    },
    model: {
      type: Number,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
