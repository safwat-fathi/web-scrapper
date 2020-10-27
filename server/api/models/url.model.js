const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    URL: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      default: "",
    },
    htmlTextContent: {
      type: String,
      required: true,
    },
    lastChecked: {
      type: Date,
      default: "",
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
