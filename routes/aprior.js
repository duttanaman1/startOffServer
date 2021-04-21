var express = require("express");
var apriori = require("node-apriori");

var aprior = express.Router();
const productModel = require("../Models/Product");

var dataset = [
  [1, 3, 4],
  [2, 3, 5],
  [1, 2, 3, 5],
  [2, 5],
  [1, 2, 3, 5],
];
let aprioriExecution = new apriori.Apriori(0.4);
aprioriExecution.on("data", function (itemset) {
  // Do something with the frequent itemset.
  var support = itemset.support;
  var items = itemset.items;
  //   console.log(
  //     `Itemset { ${items.join(
  //       ","
  //     )} } is frequent and have a support of ${support}`
  //   );
});

aprior.get("/trial", function (req, res, next) {
  aprioriExecution.exec(dataset).then(function (result) {
    // Returns both the collection of frequent itemsets and execution time in millisecond.
    var frequentItemsets = result.itemsets;
    var executionTime = result.executionTime;
    //   console.log(
    //     `Finished executing Apriori. ${frequentItemsets.length} frequent itemsets were found in ${executionTime}ms.`
    //   );
    //   console.log(frequentItemsets);

    //support threshold as 3
    var temp = frequentItemsets
      .sort((a, b) => b.support - a.support)
      .filter((x) => x.items.length >= 2 && x.support > 3);

    var resultObtained = [];
    temp.forEach((x, index) => {
      resultObtained[index] = x.items;
    });
    console.log(resultObtained);
    //retrive data according to resultObtained
      res.send(resultObtained);

      // test no to take from hash map => change to output from hash map
      var no = 1;
    //data to be obtained:
      aprior.post(no, async function (req, res, next) {
          var userid = req.body.userid;
          var name = req.body.productname;
          var desp = req.body.desp;
          var price = req.body.price;
          var stock = req.body.stock;
          var weight = req.body.weight;
          var pid = req.body.productid;

          let featureProduct = new productModel({
              userid: userid,
              productid: 45102,
              productname: name,
              desp: desp,
              price: price,
              costprice: costprice,
              stock: stock,
              pincode: pincode,
              weight: weight
          });
          console.log(featureProduct);
          featureProduct = await featureProduct.save();

          res.send(featureProduct);

      })
    //   sendingData=[
    //     [
    //       {product with product id as resultObtained[0][0]}, {product with product id as resultObtained[0][1]}
    //     ]
    //     [
    //        {product with product id as resultObtained[1][0]}, {product with product id as resultObtained[1][1]}
    //     ]
    //   ]
  });
});
module.exports = aprior;
