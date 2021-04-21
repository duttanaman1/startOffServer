var express = require("express");

var home = express.Router();

home.get("/loginInfo/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var login = {
    token: "randomTokenGenerated-123",
    email: "user@mail.com",
    roles: "consumer",
    userid: "102",
    dateTime: new Date(),
  };
  console.log(new Date());
  res.send(login);
});

//instead of itemCatalog, I am using CF_temp
home.get("/itemCatalog/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var itemCatalog = [
    {
      id: 1,
      title: "Genuine Leather iPhone 12 Case",
      price: 1.99,
      discount: 94,
      soldno: 1465,
      desp: "product description",
      img: "product.jpg",
      merchant: "sellername",
    },
    {
      id: 2,
      title: "Genuine Leather iPhone 12 Case",
      price: 2.99,
      discount: 94,
      soldno: 1465,
      desp: "product description",
      img: "product.jpg",
      merchant: "sellername",
    },
    {
      id: 3,
      title: "Genuine Leather iPhone 12 Case",
      price: 3.99,
      discount: 94,
      soldno: 1465,
      desp: "product description",
      img: "product.jpg",
      merchant: "sellername",
    },
    {
      id: 4,
      title: "Genuine Leather iPhone 12 Case",
      price: 4.99,
      discount: 94,
      soldno: 1465,
      desp: "product description",
      img: "product.jpg",
      merchant: "sellername",
    },
  ];
  res.send(itemCatalog);
});

home.get("/coupon/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var coupons = [
    {
      title: "Coupon1",
      descriptionTitle: "Coupon Description Title",
      descriptionContent: "Coupon Description Content",
      img: "Coupon1.jpg",
    },
    {
      title: "Coupon2",
      descriptionTitle: "Coupon Description Title",
      descriptionContent: "Coupon Description Content",
      img: "Coupon2.jpg",
    },
  ];
  res.send(coupons);
});

home.get("/featuredProductCatalog/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var featuredProductCatalog = [
    {
      id: 1,
      img: "img1.jpg",
      title: "product item 1",
      price: 2.3369,
      desp: "description",
    },
    {
      id: 2,
      img: "img2.jpg",
      title: "product item 2",
      price: 2.3369,
      desp: "description",
    },
    {
      id: 3,
      img: "img3.jpg",
      title: "product item 3",
      price: 2.3369,
      desp: "description",
    },
    {
      id: 4,
      img: "img4.jpg",
      title: "product item 4",
      price: 2.3369,
      desp: "description",
    },
    {
      id: 5,
      img: "img5.jpg",
      title: "product item 5",
      price: 2.3369,
      desp: "description",
    },
    {
      id: 6,
      img: "img6.jpg",
      title: "product item 6",
      price: 2.3369,
      desp: "description",
    },
  ];
  res.send(featuredProductCatalog);
});
module.exports = home;
