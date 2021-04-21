var express = require("express");
var timeseries = require("timeseries-analysis");
var timeTemp2 = express.Router();
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

timeTemp2.get("/next/:value", function (req, res, next) {
  var userid = req.params.value;
  var t = new timeseries.main(ProfitDate);
  t.smoother({ period: 4 }).save("smoothed");
  t
    .ma({
      period: 5,
    })
    .lwma({
      period: 2,
    });

  var coeffs = t.ARMaxEntropy();

  var results = [];

  for(var i=0;i<5;i++){
      var forecast = 0;
      for (var j = 0; j < coeffs.length; j++) {
          forecast -= t.data[10 - i][1] * coeffs[i];
      }
  }

 
  res.send(sendingData);
});