var express = require("express");

var cart = express.Router();
const Cart = require('../models/Cart')

cart.post("/deleteProducts", function (req, res, next) {
  var userid = req.body.userid;
  var productId = req.body.productId;

  var result = AlluserproductsAddedToCart.find((e) => {
    return e.userid == userid;
  }).products.filter((prod) => {
    return prod.productid !== productId;
  });

  //update result in mongodb
  res.send("delete data sent confirmation");
});

cart.post("/addToCart", function (req, res, next) {
  var productid = req.body.productid;
  var productName = req.body.productName;
  var price = req.body.price;
  var userid = req.body.userid;
  var image = req.body.img;

  if (
    AlluserproductsAddedToCart.find((e) => {
      return e.userid == userid;
    }).products.find((prod) => {
      return prod.productid == productid;
    })
  ) {
    AlluserproductsAddedToCart.find((e) => {
      return e.userid == userid;
    }).products.find((prod) => {
      return prod.productid == productid;
    }).quantity += 1;
    res.send(true);
  } else {
    AlluserproductsAddedToCart.find((e) => {
      return e.userid == userid;
    }).products.push({
      productid: 4,
      image: image,
      name: productName,
      description: desp,
      price: price,
      quantity: 1,
      sellerId: sellerId,
    });
    res.send(true);
  }
});

cart.get("/showProducts/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var cartAddedProducts = AlluserproductsAddedToCart.find((e) => {
    return e.userid == userid;
  }).products;
  var sendData = {
    products: cartAddedProducts,
    promotions: promotions,
  };

  res.send(sendData);
});

module.exports = cart;
