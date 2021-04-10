var express = require("express");
const recommend = require("../node_modules/collaborative-filter/lib/cf_api");

var temp = express.Router();

const ratings = [
  [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [4, 1, 0, 0, 0, 5, 0, 0, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 2, , 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 2, 5, 0, 0, 3, 0, 0, 0, 3, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
];
//items as columns and users as rows
temp.get("/trial", function (req, res, next) {
  var numUsers = 10;
  var numItems = 20;
  const coMatrix = recommend.coMatrix(ratings);
  console.log(ratings.length);
  const result = recommend.getRecommendations(ratings, coMatrix, 1);
  const restl = recommend.cFilter(ratings, 1);
  res.send(result + "------" + restl);
});

module.exports = temp;
