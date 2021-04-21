var express = require("express");

var payment = express.Router();

//create diffreent schema for transactions and different schema for itemsBoughtTogether.
//Items Bought tgether data is used in aprior algorithm

payment.post("/checkout", express.json(), function (req, res, next) {
  var consumerid = req.body.userid;
  var products = req.body.product.j;
  var total = req.body.total;

  var date = new Date();
  console.log(req.body);
  res.send(true);
  var itemsBoughttogetherData = [];
  products.forEach((element) => {
    itemsBoughttogetherData.push(element.productid);
  });
  console.log(itemsBoughttogetherData);
  res.send(itemsBoughttogetherData);
});

module.exports = payment;
