var express = require("express");

var auth = express.Router();

var accountDetails = [
  {
    email: "user1@mail.com",
    roles: "consumer",
    userid: 1,
    password: "user1@mail.com",
    username: "user1@mail.com",
  },
  {
    email: "user2@mail.com",
    roles: "consumer",
    userid: 2,
    password: "user2@mail.com",
    username: "user2@mail.com",
  },
  {
    email: "user3@mail.com",
    roles: "consumer",
    userid: 3,
    password: "user3@mail.com",
    username: "user3@mail.com",
  },
];

auth.post("/login", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log("userName " + username + ", password " + password);
  var loginDetails = accountDetails.filter((account) => {
    return account.email == username || account.username == password;
  });
  if (loginDetails.length > 0) {
    res.send({
      login: true,
      token: "randomTokenGenerated-123",
      email: loginDetails[0].email,
      roles: loginDetails[0].roles,
      userid: loginDetails[0].userid,
      username: loginDetails[0].username,
      dateTime: new Date(),
    });
  } else {
    res.send({ login: false });
  }
});
auth.post("/signUp", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  var email = req.body.email;
  console.log(username + ", " + password + ", " + role + ", " + email);
  res.send({
    success: true,
    token: "randomTokenGenerated-123",
    userid: 2,
    email: email,
    roles: role,
    username: username,
    dateTime: new Date(),
  });
});

auth.post("/fillDetails", function (req, res, next) {
  var phone = req.body.phone;
  var dob = req.body.dob;
  var city = req.body.city;
  var country = req.body.country;
  var lastName = req.body.lastName;
  var firstName = req.body.firstName;
  var pincode = req.body.pincode;
  var userid = req.body.userid;
  console.log(phone + ", " + dob + ", " + city + ", " + country);
  console.log(lastName + ", " + firstName + ", " + pincode);
  res.send({ success: true, userid: userid });
});

auth.post("/filldetails2", function (req, res, next) {
  var userid = req.body.userid;
  var alrdsell = req.body.alrdsell;
  var currrev = req.body.currrev;
  var website = req.body.website;
  res.send(true);
});

module.exports = auth;
