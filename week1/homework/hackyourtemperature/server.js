const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello from backend to frontend!");
});

// Listen for requests
app.listen(3000);
