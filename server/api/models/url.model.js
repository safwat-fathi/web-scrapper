const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  URL: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    default: "",
  },
  html: {
    type: String,
    required: true,
  },
  timestamps: {
    created_at: Date,
    updated_at: {
      type: Date,
      default: Date.now,
    },
    last_checked: Date,
  },
});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
