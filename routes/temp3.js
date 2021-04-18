//Extraction of data for collaborative Filtering

var express = require("express");

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
    //avgRating of product can be calculated from ratings given in the reviews
    reviews: [
      {
        reviewid: 1,
        userid: 1,
        username: "user",
        userimg: "img1.jpg",
        rating: 1,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 3,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 3,
        username: "user",
        userimg: "img1.jpg",
        rating: 1,
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
        rating: 2,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 5,
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
        rating: 3,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 4,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 3,
        username: "user2",
        userimg: "img1.jpg",
        rating: 5,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 4,
        userid: 4,
        username: "user2",
        userimg: "img1.jpg",
        rating: 1,
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
        rating: 3,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 4,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 3,
        username: "user2",
        userimg: "img1.jpg",
        rating: 5,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 4,
        userid: 4,
        username: "user2",
        userimg: "img1.jpg",
        rating: 1,
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
        userid: 6,
        username: "user",
        userimg: "img1.jpg",
        rating: 3,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 2,
        userid: 5,
        username: "user2",
        userimg: "img1.jpg",
        rating: 4,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 3,
        username: "user2",
        userimg: "img1.jpg",
        rating: 5,
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
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 4,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 3,
        username: "user2",
        userimg: "img1.jpg",
        rating: 5,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 4,
        userid: 6,
        username: "user2",
        userimg: "img1.jpg",
        rating: 2,
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
        reviewid: 2,
        userid: 2,
        username: "user2",
        userimg: "img1.jpg",
        rating: 4,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 3,
        userid: 1,
        username: "user2",
        userimg: "img1.jpg",
        rating: 2,
        reviewDesp: "something something",
        reviewDate: "11/12/2021",
      },
      {
        reviewid: 4,
        userid: 6,
        username: "user2",
        userimg: "img1.jpg",
        rating: 2,
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

const product = {};
const user = {};
productsData.forEach((item, index) => {
  product[index] = item.productId;
  item.reviews.forEach((usr, indUser) => {
    user[indUser] = usr.userid;
  });
});

var resProdUser = [parseInt(Object.keys(product).length)];

for (var i = 0; i < Object.keys(product).length; i++) {
  resProdUser[i] = new Array(parseInt(Object.keys(user).length)).fill(0);
}

productsData.forEach((item, index) => {
  item.reviews.forEach((usr, indUser) => {
    resProdUser[index][indUser] = usr.rating;
  });
});

module.exports = resProdUser;
