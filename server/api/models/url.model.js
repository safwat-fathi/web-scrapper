const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    url: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      default: "",
      trim: true,
    },
    versions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Version",
      },
    ],
    hasNewVersion: {
      type: Boolean,
      default: false,
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
