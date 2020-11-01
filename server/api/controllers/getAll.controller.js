// DB model
const URL = require("../models/url.model");

const getUrls = async (req, res, next) => {
  try {
    let urls = await URL.find({});

    if (urls.length < 1) {
      res.status(200).json({
        message: "No URLs imported",
        data: [],
      });
    } else {
      res.status(200).json({
        message: "URLs imported successfully",
        data: urls,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "failed",
      error: err,
    });
  }
  next();
};

module.exports = getUrls;
