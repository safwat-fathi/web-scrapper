const http = require("http");
const app = require("./app");
// const {minifyText} = require('./utils')

// add database connection
require("./db");

const PORT = 4000;

// @ts-ignore
app.listen(PORT, () => console.log("API is running on port 4000"));
