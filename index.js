const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.status(200).json("Hello world");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
module.exports = app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on http://localhost:4000`)
);