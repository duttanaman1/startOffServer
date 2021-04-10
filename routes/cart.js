var express = require("express");

var cart = express.Router();
//products=AlluserproductsAddedToCart.filter((e)=>{return e.userid==userid})
var products = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2,
  },
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 1",
    price: 9.99,
    quantity: 1,
  },
];
var promotions = [
  {
    code: "SUMMER",
    discount: "50%",
    expdate: "11/12/2021",
  },
  {
    code: "AUTUMN",
    discount: "40%",
    expdate: "11/12/2021",
  },
  {
    code: "WINTER",
    discount: "30%",
    expdate: "11/12/2021",
  },
];

cart.get("/showProducts/:userid", function (req, res, next) {
  var userid = req.params.userid;
  //filter using the userId here
  var sendData = {
    products: products,
    promotions: promotions,
  };

  res.send(sendData);
});

module.exports = cart;
