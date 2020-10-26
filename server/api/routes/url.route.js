const express = require("express");
const router = express.Router();

// controllers
const { scrape } = require("../controllers/scrape.controller");

router.post("search", scrape);

module.exports = router;
