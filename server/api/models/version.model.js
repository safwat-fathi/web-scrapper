const mongoose = require("mongoose");

const versionSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    version: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "URL",
    },
  },
  { timestamps: true }
);

const Version = mongoose.model("Version", versionSchema);

module.exports = Version;
