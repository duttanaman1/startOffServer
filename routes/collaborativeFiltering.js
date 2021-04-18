var express = require("express");
const prodValue = require("./temp3");
var collaborativeFiltering = express.Router();

//rows as items and columns as users
// var Itemratings = [
//   [0, 3, 0, 0, 1, 0],
//   [0, 0, 2, 2, 5, 0],
//   [2, 0, 3, 1, 0, 0],
//   [5, 1, 2, 0, 2, 0],
//   [0, 0, 0, 0, 0, 0],
// ];

var Itemratings = prodValue;
//console.log(Itemratings);
//removing items not rated
for (var i = 0; i < Itemratings.length; i++) {
  var flag = true;
  for (var j = 0; j < Itemratings[i].length; j++) {
    if (Itemratings[i][j] > 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Itemratings.splice(i, 1);
  }
}

var ratings = new Array(Itemratings[0].length);
for (var i = 0; i < ratings.length; i++) {
  ratings[i] = new Array(Itemratings.length);
}
var fakeratings = new Array(Itemratings[0].length);
for (var i = 0; i < fakeratings.length; i++) {
  fakeratings[i] = new Array(Itemratings.length);
}

//transpose of matrix
Itemratings.forEach((item, indexI) => {
  Itemratings[indexI].forEach((it, indexJ) => {
    ratings[indexJ][indexI] = Itemratings[indexI][indexJ];
  });
});

//average rating of item
var avgItemRating = new Array(Itemratings.length);
Itemratings.forEach((item, indexI) => {
  var sum = 0;
  var count = 0;
  Itemratings[indexI].forEach((it, indexJ) => {
    sum += it;
    count += it > 0 ? 1 : 0;
  });
  avgItemRating[indexI] = sum / count;
});

//removing 0 ratings by the user
Itemratings.forEach((item, indexI) => {
  Itemratings[indexI].forEach((it, indexJ) => {
    if (Itemratings[indexI][indexJ] == 0) {
      Itemratings[indexI][indexJ] = avgItemRating[indexI];
    }
  });
});

//assigin values to fake ratings
Itemratings.forEach((item, indexI) => {
  Itemratings[indexI].forEach((it, indexJ) => {
    fakeratings[indexJ][indexI] = Itemratings[indexI][indexJ];
  });
});
//transpose of matrix
Itemratings.forEach((item, indexI) => {
  Itemratings[indexI].forEach((it, indexJ) => {
    fakeratings[indexJ][indexI] = Itemratings[indexI][indexJ];
  });
});
//rows as users and columns as items
// var ratings = [
//   [0, 0, 3, 2, 5],
//   [3, 0, 5, 0, 1],
//   [0, 2, 0, 3, 2],
//   [0, 2, 4, 1, 0],
//   [1, 5, 0, 0, 2],
//   [0, 0, 0, 0, 0],
// ];
for (var i = 0; i < ratings.length; i++) {
  var flag = true;
  for (var j = 0; j < ratings[i].length; j++) {
    if (ratings[i][j] > 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    ratings.splice(i, 1);
    fakeratings.splice(i, 1);
  }
}

//console.log(ratings);
//console.log(fakeratings);

//console.log(avgItemRating);
var avgUserRating = new Array();
function average(n) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < ratings[n].length; i++) {
    sum += ratings[n][i];
    if (ratings[n][i] > 0) {
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
      if (ratings[i][j] != 0) {
        predictRating[i][j] = 0;
      } else {
        predictRating[i][j] = Math.round(
          avgUserRating[i] + mainFunc(i, j) / ratings[i].length
        );
      }
    }
  }
}
function mainFunc(i, j) {
  var sum = 0;
  for (var k = 0; k < ratings.length; k++) {
    var similar = CosineSim(i, k);
    //var similar = PearsonSim(i, k);
    var rateTemp =
      ratings[k][j] > 0 ? ratings[k][j] - avgUserRating[i] : fakeratings[k][j];
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
    var s1 = ratings[i][j] > 0 ? ratings[i][j] : fakeratings[k][j];
    var s2 = ratings[k][j] > 0 ? ratings[k][j] : fakeratings[k][j];
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
      ratings[i][j] > 0 ? ratings[i][j] - avgUserRating[i] : fakeratings[k][j];
    var s2 =
      ratings[k][j] > 0 ? ratings[k][j] - avgUserRating[k] : fakeratings[k][j];
    sum += s1 * s2;
    sum1 += s1 * s1;
    sum2 += s2 * s2;
  }
  return sum / Math.pow(sum1 * sum2, 0.5);
}
collaborativeFiltering.get("/trial/:value", function (req, res, next) {
  var userid = req.params.value;
  generatePredictRating();

  res.send(JSON.stringify(predictRating));
  //console.log(predictRating);
});

module.exports = collaborativeFiltering;
