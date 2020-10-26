const mongoose = require("mongoose");

// scrape URL
const scrape = (req, res, next) => {
  try {
    // get request body
    const { url, name } = req.body;
    console.log(url, name);
    // check if url is in DB
    // store url in DB
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = {
  scrape,
};
