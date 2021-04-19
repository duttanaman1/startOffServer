var express = require("express");

var contacts = express.Router();

contacts.get("/getContacts/:id", function (req, res, next) {
  var userid = req.params.id;
  var contacts = [
    {
      userid: 1,
      username: "consumer 1",
      email: "username1@mail.com",
      phone: "733921025",
      Address: "some address",
      userimg: "img1.jpg",
    },
    {
      userid: 2,
      username: "consumer 2",
      email: "username2@mail.com",
      phone: "733921025",
      Address: "some address",
      userimg: "img1.jpg",
    },
    {
      userid: 3,
      username: "consumer 3",
      email: "username2@mail.com",
      phone: "733921025",
      Address: "some address",
      userimg: "img1.jpg",
    },
  ];

  res.send(contacts);
});

module.exports = contacts;
