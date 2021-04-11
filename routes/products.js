var express = require("express");

var products = express.Router();
var productsData = [
  {
    productId: 1,
    productName: "product1",
    image: "img1.jpg",
    desp: "description of product",
    price: 100,
    sellerName: "seller1",
    sellerId: "1",
    sellerContact: "9841023456",
    stock: 100,
    rating: 5,
    ratedCount:2
    reviews: [
      {
        reviewid: 1,
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
        username: "user2",
        userimg: "img1.jpg",
        rating: 3.6,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
    ],
    offers: [
      {
        offerid: 1,
        offerDetails: "discount on this product now",
        expDate: "11/12/2025",
      },
      {
        offerid: 2,
        offerDetails: "this service available",
        expDate: "11/12/2025",
      },
    ],
  },
  {
    productId: 2,
    productName: "product2",
    image: "img1.jpg",
    desp: "description of product",
    price: 200,
    sellerName: "seller1",
    sellerId: "1",
    sellerContact: "9841023456",
    stock: 100,
    rating: 5,
    reviews: [
      {
        reviewid: 1,
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
        username: "user2",
        userimg: "img1.jpg",
        rating: 3.6,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
    ],
    offers: [
      {
        offerid: 1,
        offerDetails: "discount on this product now",
        expDate: "11/12/2025",
      },
      {
        offerid: 2,
        offerDetails: "this service available",
        expDate: "11/12/2025",
      },
    ],
  },
  {
    productId: 3,
    productName: "product3",
    image: "img1.jpg",
    desp: "description of product",
    price: 300,
    sellerName: "seller1",
    sellerId: "1",
    sellerContact: "9841023456",
    stock: 100,
    rating: 5,
    reviews: [
      {
        reviewid: 1,
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
        username: "user2",
        userimg: "img1.jpg",
        rating: 3.6,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
    ],
    offers: [
      {
        offerid: 1,
        offerDetails: "discount on this product now",
        expDate: "11/12/2025",
      },
      {
        offerid: 2,
        offerDetails: "this service available",
        expDate: "11/12/2025",
      },
    ],
  },
];
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
