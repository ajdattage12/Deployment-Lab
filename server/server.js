const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/js", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.js"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Docked at port ${port}`);
});

// app.use("/js", express.static(path.join(__dirname, "../client/index.js")));
// console.log("is this working")

