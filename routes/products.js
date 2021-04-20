var express = require("express");

var products = express.Router();
const Product = require('../models/Product');

products.get("/tag/:id", async function (req, res, next) {
  var id = req.params.id;
  var sendData = await productsData.find((item) => item.productId == id);

  res.send(sendData);
});
products.get("/searchQuery/:value", async function (req, res, next) {
  var searchQuery = req.params.value;
  var sendData = await productsData.filter((item) => {
    var regexp = new RegExp(searchQuery);
    return (
      regexp.test(item.productName) ||
      regexp.test(item.sellerName) ||
      regexp.test(item.desp)
    );
  });
  res.send(sendData);
});
module.exports = products;
