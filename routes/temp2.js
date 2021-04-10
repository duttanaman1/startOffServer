var express = require("express");
const recommend = require("../node_modules/collaborative-filter/lib/cf_api");

var temp2 = express.Router();

var ratings = [
  [0, 0, 3, 2, 5],
  [3, 0, 5, 0, 1],
  [0, 2, 0, 3, 2],
  [0, 2, 4, 1, 0],
  [1, 5, 0, 0, 2],
];

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
    var similar = Sim(i, k);
    var rateTemp =
      ratings[k][j] > 0 ? ratings[k][j] - avgUserRating[i] : avgUserRating[i];
    //var rateTemp = ratings[k][j] - avgUserRating[i];
    sum += similar * rateTemp;
  }
  return sum;
}

function Sim(i, k) {
  var sum = 0;
  var sum1 = 0;
  var sum2 = 0;
  for (var j = 0; j < ratings[i].length; j++) {
    var s1 =
      ratings[i][j] > 0 ? ratings[i][j] - avgUserRating[i] : avgUserRating[i];
    var s2 =
      ratings[k][j] > 0 ? ratings[k][j] - avgUserRating[k] : avgUserRating[k];
    sum += s1 * s2;
    sum1 += s1 * s1;
    sum2 += s2 * s2;
  }
  return sum / Math.pow(sum1 * sum2, 0.5);
}
temp2.get("/trial/:value", function (req, res, next) {
  var userid = req.params.value;
  generatePredictRating();

  res.send(avgUserRating + "-----------" + JSON.stringify(predictRating));
});

module.exports = temp2;
