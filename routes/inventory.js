var express = require("express");

var inventory = express.Router();
const productModel = require("../Models/Product");

inventory.post("/addProducts", function (req, res, next) {
  var userid = req.body.userid;
  var name = req.body.productname;
  var desp = req.body.desp;
  var price = req.body.price;
  var costprice = req.body.costprice;
  var stock = req.body.stock;
  var pincode = req.body.pincode;
  var weight = req.body.weight;

    let newProduct = new productModel({
        userid: userid,
        productid: 45102,
        productname: name,
        desp: desp,
        price: price,
        costprice: costprice,
        stock: stock,
        pincode: pincode,
        weight: weight
    });
    console.log(newProduct);
    newProduct = await newProduct.save();

    res.send(newProduct);
});
inventory.post("/updateProducts/:productid", function (req, res, next) {
  var userid = req.body.userid;
  var productid = req.body.productid;
  var name = req.body.name;
  var desp = req.body.desp;
  var price = req.body.price;
  var costprice = req.body.costprice;
  var stock = req.body.stock;
  var pincode = req.body.pincode;
  var weight = req.body.weight;

    if (: productid === productid){
    let newProduct = new productModel({
        userid: 45,
        productname: name,
        desp: desp,
        price: price,
        costprice: costprice,
        stock: stock,
        pincode: pincode,
        weight: weight
    });
    console.log(newProduct);
    newProduct = await newProducct.save();

    res.send(newProduct);
}else {
    console.log("Product not found.");
}

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

inventory.delete("/delete/products/:id", function (req, res, next) {
  var productid = req.params.id;
  //delete product with product id
    productModel.delete(req.params.id, (err, docs) => {
        callback(err, docs, res, next);
    });
  res.send(true);
});

module.exports = inventory;
