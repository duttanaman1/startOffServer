var express = require("express");
var timeseries = require("timeseries-analysis");
var timeTemp1 = express.Router();

//date and profilt of one seller
var ProfitDate = [
  [new Date(2021, 03, 05), 500],
  [new Date(2021, 03, 05), 500],
  [new Date(2021, 03, 06), 600],
  [new Date(2021, 03, 06), 600],
  [new Date(2021, 03, 08), 500],
  [new Date(2021, 03, 08), 500],
  [new Date(2021, 03, 10), 200],
  [new Date(2021, 03, 10), 200],
  [new Date(2021, 03, 12), 500],
  [new Date(2021, 03, 12), 500],
  [new Date(2021, 03, 15), 700],
  [new Date(2021, 03, 16), 500],
  [new Date(2021, 03, 16), 500],
  [new Date(2021, 03, 18), 1100],
  [new Date(2021, 03, 18), 1100],
  [new Date(2021, 03, 20), 500],
  [new Date(2021, 03, 20), 500],
  [new Date(2021, 03, 25), 1500],
  [new Date(2021, 03, 25), 1500],
  [new Date(2021, 03, 26), 6000],
];
// var temp = [];
// for (var i = 0; i < ProfitDate.length; i++) {
//   temp.push([String(ProfitDate[i][0]).substr(4, 11), ProfitDate[i][1]]);
// }
// console.log(temp);
//date and no of goods sold of one seller
var ProductSoldDate = [
  [new Date(2021, 03, 05), 1],
  [new Date(2021, 03, 06), 2],
  [new Date(2021, 03, 08), 3],
  [new Date(2021, 03, 10), 3],
  [new Date(2021, 03, 12), 5],
  [new Date(2021, 03, 15), 1],
  [new Date(2021, 03, 16), 2],
  [new Date(2021, 03, 18), 3],
  [new Date(2021, 03, 20), 2],
  [new Date(2021, 03, 25), 1],
  [new Date(2021, 03, 26), 3],
];
//date and avg ratings of all products of one seller
var ProductRateDate = [
  [new Date(2021, 03, 05), 1],
  [new Date(2021, 03, 06), 2],
  [new Date(2021, 03, 08), 3],
  [new Date(2021, 03, 10), 3],
  [new Date(2021, 03, 12), 5],
  [new Date(2021, 03, 15), 1],
  [new Date(2021, 03, 16), 2],
  [new Date(2021, 03, 18), 3],
  [new Date(2021, 03, 20), 2],
  [new Date(2021, 03, 25), 4],
  [new Date(2021, 03, 26), 3],
];

timeTemp1.get("/next/:value", function (req, res, next) {
  var userid = req.params.value;
  var t = new timeseries.main(ProfitDate);
  t.smoother({ period: 4 }).save("smoothed");
  var processed = t
    .ma({
      period: 5,
    })
    .lwma({
      period: 2,
    });

  var bestSettings = t.regression_forecast_optimize();

  // var coeff = t.ARMaxEntropy();
  // console.log(coeff.length);
  t.sliding_regression_forecast({
    sample: bestSettings.sample,
    degree: bestSettings.degree,
    method: bestSettings.method,
  });

  var result = t.output();
  var date = [];
  var profits = [];

  for (var i = 0; i < parseInt(result.length); i++) {
    date.push(String(result[i][0]).substr(4, 11));
    profits.push(result[i][1]);
  }
  var sendingData = {
    date: date,
    profits: profits,
  };
  console.log("next");
  console.log(sendingData);
  res.send(sendingData);
});

timeTemp1.get("/previous/:value", function (req, res, next) {
  var userid = req.params.value;
  var tx = new timeseries.main(ProductSoldDate);
  tx.smoother({ period: 4 }).save("smoothed");
  var processed = tx
    .ma({
      period: 5,
    })
    .lwma({
      period: 2,
    });

  var bestSettings = tx.regression_forecast_optimize();

  // var coeff = t.ARMaxEntropy();
  // console.log(coeff.length);
  tx.sliding_regression_forecast({
    sample: 3,
    degree: 2,
    method: "ARMaxEntropy",
  });

  var result = tx.output();
  var date = [];
  var profits = [];

  for (var i = 0; i < parseInt(result.length); i++) {
    date.push(String(result[i][0]).substr(4, 11));
    profits.push(result[i][1]);
  }
  var sendingData = {
    date: date,
    profits: profits,
  };
  console.log("next");
  console.log(sendingData);
  res.send(sendingData);
});

timeTemp1.get("/rating/:value", function (req, res, next) {
  var userid = req.params.value;
  var tx = new timeseries.main(ProductRateDate);
  tx.smoother({ period: 4 }).save("smoothed");
  var processed = tx
    .ma({
      period: 5,
    })
    .lwma({
      period: 2,
    });

  var bestSettings = tx.regression_forecast_optimize();

  // var coeff = t.ARMaxEntropy();
  // console.log(coeff.length);
  tx.sliding_regression_forecast({
    sample: 3,
    degree: 2,
    method: "ARMaxEntropy",
  });

  var result = tx.output();
  var date = [];
  var ratings = [];

  for (var i = 0; i < parseInt(result.length); i++) {
    date.push(String(result[i][0]).substr(4, 11));
    ratings.push(result[i][1]);
  }
  var sendingData = {
    date: date,
    ratings: ratings,
  };
  console.log("ratings");
  console.log(sendingData);
  res.send(sendingData);
});
module.exports = timeTemp1;
