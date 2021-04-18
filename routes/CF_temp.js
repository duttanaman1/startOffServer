var express = require("express");
var CF_temp = express.Router();

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
    productId: 4,
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
    productId: 5,
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
    productId: 6,
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
    productId: 7,
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

var pcount = 0;
var ucount = 0;
var product = {};
var user = {};
var countUser = 0;

//creating product and user objects
productsData.forEach((item, index) => {
  product[index] = item.productId;
  item.reviews.forEach((usr, indUser) => {
    if (!(Object.values(user).indexOf(usr.userid) > -1)) {
      user[countUser] = usr.userid;
      countUser++;
    }
  });
});

pcount = parseInt(Object.values(product).length);
ucount = parseInt(Object.values(user).length);
//pcount and ucount are computed to find the size of products and users, there is no extra need of product/ user array now.

var resProdUser = [pcount];

//creating resProdUser matrix
productsData.forEach((item, index) => {
  resProdUser[index] = new Array(ucount).fill({
    prodId: item.productId,
    userid: -1,
    rating: 0,
  });
  for (var i = 0; i < ucount; i++) {
    var rate = 0;
    if (
      item.reviews.find((rt) => {
        rate = rt.rating;
        return rt.userid == user[i];
      })
    ) {
      resProdUser[index][i] = {
        prodId: item.productId,
        userid: user[i],
        rating: rate,
      };
    } else {
      resProdUser[index][i] = {
        prodId: item.productId,
        userid: user[i],
        rating: 0,
      };
    }
  }
});

//removing items not rated by any user
for (var i = 0; i < resProdUser.length; i++) {
  var flag = true;
  for (var j = 0; j < resProdUser[i].length; j++) {
    if (resProdUser[i][j].rating > 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    resProdUser.splice(i, 1);
  }
}
// console.log("resproduser --------------------");
// console.log(resProdUser);
//creating rating and fakerating array
var ratings = new Array(resProdUser[0].length);
for (var i = 0; i < ratings.length; i++) {
  ratings[i] = new Array(resProdUser.length);
}
var fakeratings = new Array(resProdUser[0].length);
for (var i = 0; i < fakeratings.length; i++) {
  fakeratings[i] = new Array(resProdUser.length);
}

//transpose of rating matrix
resProdUser.forEach((item, indexI) => {
  item.forEach((it, indexJ) => {
    ratings[indexJ][indexI] = resProdUser[indexI][indexJ];
  });
});

//average rating of item based on individual items
var avgItemRating = new Array(resProdUser.length);
resProdUser.forEach((item, indexI) => {
  var sum = 0;
  var count = 0;
  resProdUser[indexI].forEach((it, indexJ) => {
    sum += it.rating;
    count += it.rating > 0 ? 1 : 0;
  });
  avgItemRating[indexI] = parseInt(sum / count);
});

//console.log(avgItemRating);

//assigning fake ratings
resProdUser.forEach((item, indexI) => {
  resProdUser[indexI].forEach((it, indexJ) => {
    fakeratings[indexJ][indexI] = {
      prodId: resProdUser[indexI][indexJ].prodId,
      userid: resProdUser[indexI][indexJ].userid,
      rating: resProdUser[indexI][indexJ].rating,
    };
    if (resProdUser[indexI][indexJ].rating == 0) {
      fakeratings[indexJ][indexI].rating = avgItemRating[indexI];
    }
  });
});

// console.log("rating ------------");
// console.log(ratings);
// console.log("fakerating------------");
// console.log(fakeratings);

var avgUserRating = new Array();
function average(n) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < ratings[n].length; i++) {
    sum += ratings[n][i].rating;
    if (ratings[n][i].rating > 0) {
      count += 1;
    }
  }
  return sum / count;
}
function generateAvgUserRating() {
  for (var i = 0; i < ratings.length; i++) {
    avgUserRating[i] = average(i);
  }
}
var predictRating = new Array(ratings.length);
function generatePredictRating() {
  generateAvgUserRating();
  for (var i = 0; i < ratings.length; i++) {
    predictRating[i] = new Array(ratings[i].length);
  }

  for (var i = 0; i < ratings.length; i++) {
    for (var j = 0; j < ratings[i].length; j++) {
      predictRating[i][j] = {
        prodId: ratings[i][j].prodId,
        userid: ratings[i][j].userid,
        rating: ratings[i][j].rating,
      };

      if (ratings[i][j].rating != 0) {
        predictRating[i][j].rating = -1;
        //sort predictRating rows based on ratings in decending order
      } else {
        predictRating[i][j].rating = Math.round(
          avgUserRating[i] + mainFunc(i, j) / ratings[i].length
        );
      }
    }
  }
  //console.log(predictRating);
}
function mainFunc(i, j) {
  var sum = 0;
  for (var k = 0; k < ratings.length; k++) {
    var similar = CosineSim(i, k);
    //var similar = PearsonSim(i, k);
    var rateTemp =
      ratings[k][j].rating > 0
        ? ratings[k][j].rating - avgUserRating[i]
        : fakeratings[k][j].rating;
    //var rateTemp = ratings[k][j] - avgUserRating[i];
    sum += similar * rateTemp;
  }
  return sum;
}

//Cosine Coefficient
function CosineSim(i, k) {
  var sum1 = 0,
    sum2 = 0,
    sum3 = 0;
  for (var j = 0; j < ratings[i].length; j++) {
    var s1 =
      ratings[i][j].rating > 0
        ? ratings[i][j].rating
        : fakeratings[k][j].rating;
    var s2 =
      ratings[k][j].rating > 0
        ? ratings[k][j].rating
        : fakeratings[k][j].rating;
    sum1 += s1 * s2;
    sum2 += s1 * s1;
    sum3 += s2 * s2;
  }
  return sum1 / Math.pow(sum1 * sum2, 0.5);
}
//Pearson Coefficient
function PearsonSim(i, k) {
  var sum = 0;
  var sum1 = 0;
  var sum2 = 0;
  for (var j = 0; j < ratings[i].length; j++) {
    var s1 =
      ratings[i][j].rating > 0
        ? ratings[i][j].rating - avgUserRating[i]
        : fakeratings[k][j].rating;
    var s2 =
      ratings[k][j].rating > 0
        ? ratings[k][j].rating - avgUserRating[k]
        : fakeratings[k][j].rating;
    sum += s1 * s2;
    sum1 += s1 * s1;
    sum2 += s2 * s2;
  }
  return sum / Math.pow(sum1 * sum2, 0.5);
}

CF_temp.get("/:value", function (req, res, next) {
  var userid = req.params.value;
  generatePredictRating();

  //sorting predicted ratings based on descending order
  predictRating.forEach((item, index) => {
    item.sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
  });
  var ind = Object.keys(user).find((key) => user[key] === parseInt(userid));
  console.log(predictRating[ind]);
  var resultPredict = predictRating[ind].filter((item) => {
    return item.rating > 1;
  });
  var result = productsData.filter((product) => {
    var flag = false;
    resultPredict.forEach((item, index) => {
      if (item.prodId == product.productId) {
        flag = true;
      }
    });
    return flag;
  });
  res.send(JSON.stringify(result));
});
module.exports = CF_temp;
