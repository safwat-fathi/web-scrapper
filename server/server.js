const http = require("http");
const app = require("./app");

const PORT = 4000;

// @ts-ignore
app.listen(PORT, () => console.log("API is running on port 4000"));
