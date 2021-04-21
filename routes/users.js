var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("../models/User");

/* GET users listing. */
router.post("/users", function (req, res) {
  User.create(req.body).then(function (user) {
    console.log(user);
    res.send(user);
  });
});
module.exports = router;
