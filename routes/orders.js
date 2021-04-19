var express = require("express");

var orders = express.Router();
var Userorderslist = [
  {
    userId: 1,
    order: [
      {
        orderId: 1,
        productId: 1,
        productName: "product1",
        image: "img1.jpg",
        quantity: 1,
        seller: "seller1",
        total: 100,
        status: "delivered",
        statusDate: "10/11/2021",
        rating: 3,
        feedback: "",
      },
      {
        orderId: 2,
        productId: 2,
        productName: "product2",
        image: "img2.jpg",
        quantity: 2,
        seller: "seller2",
        total: 200,
        status: "shipping",
        statusDate: "08/11/2021",
        rating: 0,
        feedback: "",
      },
      {
        orderId: 3,
        productId: 3,
        productName: "product3",
        image: "img3.jpg",
        quantity: 3,
        seller: "seller3",
        total: 300,
        status: "ordered",
        statusDate: "03/11/2021",
        rating: 0,
        feedback: "",
      },
      {
        orderId: 4,
        productId: 4,
        productName: "product4",
        image: "img4.jpg",
        quantity: 4,
        seller: "seller4",
        total: 400,
        status: "canceled",
        statusDate: "03/11/2021",
        rating: 0,
        feedback: "",
      },
    ],
  },
  {
    userId: 2,
    order: [
      {
        orderId: 1,
        productId: 1,
        productName: "product1",
        image: "img1.jpg",
        quantity: 1,
        seller: "seller1",
        total: 100,
        status: "delivered",
        statusDate: "10/11/2021",
        rating: 0,
        feedback: "",
      },
      {
        orderId: 2,
        productId: 2,
        productName: "product2",
        image: "img2.jpg",
        quantity: 2,
        seller: "seller2",
        total: 200,
        status: "shipping",
        statusDate: "08/11/2021",
        rating: 0,
        feedback: "",
      },
      {
        orderId: 3,
        productId: 3,
        productName: "product3",
        image: "img3.jpg",
        quantity: 3,
        seller: "seller3",
        total: 300,
        status: "ordered",
        statusDate: "03/11/2021",
        rating: 0,
        feedback: "",
      },
      {
        orderId: 4,
        productId: 4,
        productName: "product4",
        image: "img4.jpg",
        quantity: 4,
        seller: "seller4",
        total: 400,
        status: "canceled",
        statusDate: "03/11/2021",
        rating: 0,
        feedback: "",
      },
    ],
  },
];

orders.get("/consumer/:userId", function (req, res, next) {
  var userId = req.params.userId;
  var ReqUserorderList = Userorderslist.filter((array) => {
    return array.userId == userId;
  });
  var orderList = ReqUserorderList[0].order;
  //console.log(ReqUserorderList[0].order);
  res.send(orderList);
});

orders.post("/consumer/rating", function (req, res, next) {
  var userid = req.body.userid;
  var orderid = req.body.orderId;
  var rating = req.body.rating;
  console.log(userid + " " + orderid + " " + rating);
  //send the updated rating to the model.
  res.send({ success: true, userid: userid, rating: rating });
});

orders.post("/consumer/feedback", function (req, res, next) {
  var userid = req.body.userid;
  var orderid = req.body.orderid;
  var newfeedback = req.body.newfeedback;
  console.log(userid + " " + orderid + " " + newfeedback);
  res.send({ success: true, userid: userid, newfeedback: newfeedback });
});

orders.get("/client/:userid", function (req, res, next) {
  var userid = req.params.userid;
  //here sendingdata contains only orders whose status is either shipping or ordered
  var sendingdata = [
    {
      orderId: 1,
      productId: 1,
      productName: "product1",
      image: "img1.jpg",
      quantity: 1,
      consumerid: 4,
      consumerName: "consumer 4",
      total: 100,
      status: "shipping",
      statusDate: "10/11/2021",
      rating: 3,
      feedback: "",
    },
    {
      orderId: 2,
      productId: 2,
      productName: "product2",
      image: "img2.jpg",
      quantity: 2,
      consumerid: 3,
      consumerName: "consumer 3",
      total: 200,
      status: "shipping",
      statusDate: "08/11/2021",
      rating: 0,
      feedback: "",
    },
    {
      orderId: 3,
      productId: 3,
      productName: "product3",
      image: "img3.jpg",
      quantity: 3,
      consumerid: 1,
      consumerName: "consumer 1",
      total: 300,
      status: "ordered",
      statusDate: "03/11/2021",
      rating: 0,
      feedback: "",
    },
    {
      orderId: 4,
      productId: 4,
      productName: "product4",
      image: "img4.jpg",
      quantity: 4,
      consumerid: 2,
      consumerName: "consumer 2",
      total: 400,
      status: "ordered",
      statusDate: "03/11/2021",
      rating: 0,
      feedback: "",
    },
  ];
  res.send(sendingdata);
});

orders.post("/client/updateStatus", function (req, res, next) {
  var userid = req.body.userid;
  var orderid = req.body.orderid;
  var status = req.body.status;
  var statusDate = req.body.statusDate;
  res.send(true);
});

orders.get("/client/getOrders/:id", function (req, res, next) {
  var consumerid = req.params.id;
  //sendingdata is filtered with consumerid;
  //status here are delivered and cancled
  var sendingdata = [
    {
      orderId: 1,
      productId: 1,
      productName: "product1",
      image: "img1.jpg",
      quantity: 1,
      consumerid: 1,
      consumerName: "consumer 4",
      total: 100,
      status: "delivered",
      statusDate: "10/11/2021",
      rating: 3,
      feedback: "",
    },
    {
      orderId: 2,
      productId: 2,
      productName: "product2",
      image: "img2.jpg",
      quantity: 2,
      consumerid: 1,
      consumerName: "consumer 3",
      total: 200,
      status: "delivered",
      statusDate: "08/11/2021",
      rating: 0,
      feedback: "",
    },
  ];
  res.send(sendingdata);
});
module.exports = orders;
