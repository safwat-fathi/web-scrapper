const mongoose = require("mongoose");
// utils function
const { minifyText, scrapeURL } = require("../../utils");

// DB model
const URL = require("../models/url.model");
const Version = require("../models/version.model");

// scrape URL
const scrape = async (req, res, next) => {
  try {
    // get request body
    const { url, title } = req.body;
    console.log(url, title);
    // get the whole document text
    let urlContent = await scrapeURL(url);

    // check if url is in DB
    let urlFromDB = await URL.findOne({ url });

    // if new URL
    if (!urlFromDB) {
      // store url in DB
      // URL.create(url).then((urlDocument) => {
      //   Version.findOneAndUpdate();
      // });
      const newUrl = new URL({
        _id: new mongoose.Types.ObjectId(),
        url,
        title,
      });

      await newUrl.save();

      res.status(201).json({
        message: "URL saved successfully",
        data: urlContent,
      });
    } else {
      // if URL already exists
      res.status(400).json({
        message: "URL already exists",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "failed",
      error: err,
    });
  }
  next();
};

module.exports = scrape;
