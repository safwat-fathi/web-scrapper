const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add routes
const urlRoutes = require("./api/routes/url.route");

app.use("/", urlRoutes);

module.exports = app;
