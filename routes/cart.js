var express = require("express");

var cart = express.Router();
var AlluserproductsAddedToCart = [
  {
    userid: 1,
    products: [
      {
        productid: 1,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 1",
        description: "Description for product item number 1",
        price: 5.99,
        quantity: 2,
        sellerId: 1,
      },
      {
        productid: 2,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 2",
        description: "Description for product item number 1",
        price: 9.99,
        quantity: 1,
        sellerId: 1,
      },
    ],
  },
  {
    userid: 2,
    products: [
      {
        productid: 1,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 1",
        description: "Description for product item number 1",
        price: 5.99,
        quantity: 2,
        sellerId: 1,
      },
      {
        productid: 3,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 2",
        description: "Description for product item number 1",
        price: 9.99,
        quantity: 1,
        sellerId: 1,
      },
    ],
  },
  {
    userid: 3,
    products: [
      {
        productid: 4,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 1",
        description: "Description for product item number 1",
        price: 5.99,
        quantity: 2,
        sellerId: 1,
      },
      {
        productid: 5,
        image: "https://via.placeholder.com/200x150",
        name: "PRODUCT ITEM NUMBER 2",
        description: "Description for product item number 1",
        price: 9.99,
        quantity: 1,
        sellerId: 1,
      },
    ],
  },
];

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
  var sellerId = req.body.sellerId;
  var desp = req.body.desp;
  var image = "https://via.placeholder.com/200x150";

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
