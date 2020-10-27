const mongoose = require("mongoose");
// utils function
const { minifyText, scrapeURL } = require("../../utils");

// DB model
const URL = require("../models/url.model");

// scrape URL
const scrape = async (req, res, next) => {
  try {
    // get request body
    const { url, title } = req.body;
    // get the whole document text
    let urlContent = await scrapeURL(url);
    // minify the text
    let minifiedUrlContent = minifyText(urlContent);

    // check if url is in DB
    let urlFromDB = await URL.findOne({ URL: url });
    console.log(urlFromDB);

    // if new URL
    if (!urlFromDB) {
      // store url in DB
      const newUrl = new URL({
        _id: new mongoose.Types.ObjectId(),
        URL: url,
        title,
        htmlTextContent: minifiedUrlContent,
      });

      await newUrl.save();

      res.status(201).json({
        message: "URL saved successfully",
        url: newUrl,
      });
    } else {
      // if URL already exists
      res.status(201).json({
        message: "URL already exists",
        url,
      });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({
      message: "failed",
      err,
    });
  }
  next();
};

module.exports = {
  scrape,
};
