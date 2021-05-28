var express = require("express");
var stock = express.Router();
var alphavantage = require("alphavantage");
const alpha = alphavantage({ key: "UC6X6X7W057WFV5K" });

var high = [];
var low = [];
var open = [];
var close = [];
var volume = [];
stock.get("/data", function (req, res, next) {
  alpha.data.intraday(`msft`).then((data) => {
    var temp = Object.values(data["Time Series (1min)"]);
    var keys = Object.keys(data["Time Series (1min)"]);
    for (var i = 0; i < temp.length; i++) {
      open.push(Object.values(temp[i])[0]);
      high.push(Object.values(temp[i])[1]);
      low.push(Object.values(temp[i])[2]);
      close.push(Object.values(temp[i])[3]);
      volume.push(Object.values(temp[i])[4]);
    }
    var sendingData = {
      keys: keys,
      open: open,
      high: high,
      low: low,
      close: close,
      volume: volume,
    };
    res.send(sendingData);
  });
});
module.exports = stock;
