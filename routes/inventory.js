var express = require("express");

var inventory = express.Router();
const productModel = require("../Models/Product");

inventory.post("/addProducts", function (req, res, next) {
  var userid = req.body.userid;
  var name = req.body.name;
  var desp = req.body.desp;
  var price = req.body.price;
  var costprice = req.body.costprice;
  var stock = req.body.stock;
  var pincode = req.body.pincode;
  var weight = req.body.weight;

  let newProduct = new productModel({});

  res.send(true);
});
inventory.post("/updateProducts", function (req, res, next) {
  var userid = req.body.userid;
  var productid = req.body.productid;
  var name = req.body.name;
  var desp = req.body.desp;
  var price = req.body.price;
  var costprice = req.body.costprice;
  var stock = req.body.stock;
  var pincode = req.body.pincode;
  var weight = req.body.weight;

  res.send(true);
});
inventory.get("/getProducts/:userid", function (req, res, next) {
  var userid = req.params.userid;
  var result = Allproducts.filter((e) => {
    return e.userid == userid;
  });
  console.log(result[0].products);
  res.send(result[0].products);
});

inventory.get("/delete/products/:id", function (req, res, next) {
  var productid = req.params.id;
  //delete product with product id
  res.send(true);
});
module.exports = inventory;
