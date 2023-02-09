// blah blah, install express

import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send(200);
});
