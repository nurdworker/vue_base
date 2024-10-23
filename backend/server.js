const express = require("express");
const app = express();
const port = 3010;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/test", (req, res) => {
  res.json("hello axios test");
});

app.listen(port, () => {
  console.log("서버시작");
});
