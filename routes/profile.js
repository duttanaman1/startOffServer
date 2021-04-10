var express = require("express");

var profile = express.Router();

profile.get("/userinfo/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var userinfo = {
    id: "qwerty123",
    FirstName: "Naman1",
    Username: "duttanaman1999",
    LastName: "Dutta",
    Email: "duttanaman1999@gmail.com",
    Mobile: "9843210478",
    DoB: "17/11/1999",
    City: "Kathmandu",
    Country: "Nepal",
    PinCode: "872335",
  };
  res.send(userinfo);
});
profile.get("/address/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var sendingData = {
    address: [
      {
        addressId: "1",
        name: "Naman",
        mob: "7339210265",
        pincode: "872235",
        locality: "Balaju",
        address: "Balaju",
        city: "Kathmanndu",
        state: "Bagmati",
        landmark: "Balaju Park",
        mobAlt: "",
        tag: "Home",
        lat: "40",
        lng: "27",
      },
      {
        addressId: "2",
        name: "Naman",
        mob: "7339210265",
        pincode: "872235",
        locality: "Balaju",
        address: "Balaju",
        city: "Kathmanndu",
        state: "Bagmati",
        landmark: "Balaju Park",
        mobAlt: "",
        tag: "Home",
        lat: "40",
        lng: "27",
      },
    ],
  };
  res.send(sendingData);
});

var reviews = [
  {
    reviewid: 1,
    productid: 1,
    productName: "product1",
    productImage: "img1.jpg",
    userid: 1,
    username: "user",
    userimg: "img1.jpg",
    rating: 7.6,
    reviewDesp: "something something",
    reviewDate: "11/12/2021",
  },
  {
    reviewid: 1,
    productid: 2,
    productName: "product2",
    productImage: "img2.jpg",
    userid: 1,
    username: "user",
    userimg: "img1.jpg",
    rating: 7.6,
    reviewDesp: "something something",
    reviewDate: "11/12/2021",
  },
  {
    reviewid: 2,
    userid: 2,
    productid: 2,
    productName: "product2",
    productImage: "img2.jpg",
    username: "user2",
    userimg: "img1.jpg",
    rating: 3.6,
    reviewDesp: "something something",
    reviewDate: "11/12/2021",
  },
];

profile.get("/feedbackReviews/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var sendingData = reviews.filter((item) => {
    return item.userid == userid;
  });
  res.send(sendingData);
});

module.exports = profile;
