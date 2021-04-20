var express = require("express");
var result = require("./aprior");
var apriorTemp = express.Router();
apriorTemp.get("/trial", function (req, res, next) {
  console.log(result);
  res.send(result);
});
module.exports = apriorTemp;
