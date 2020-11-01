const express = require("express");
const router = express.Router();

// controllers
const getUrls = require("../controllers/getAll.controller");
const scrape = require("../controllers/scrape.controller");

// get all urls from DB
router.get("/urls", getUrls);
// store new url in DB
router.post("/search", scrape);

module.exports = router;
