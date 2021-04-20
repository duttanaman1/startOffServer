var express = require("express");
var apriori = require("node-apriori");

var aprior = express.Router();

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

apriorTemp.get("/trial", function (req, res, next) {
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

    //data to be obtained:

  //   sendingData=[
  //     [
  //       {product with product id as resultObtained[0][0]}, {product with product id as resultObtained[0][1]}
  //     ]
  //     [
  //        {product with product id as resultObtained[1][0]}, {product with product id as resultObtained[1][1]}
  //     ]
  //   ]
  // });
});
module.exports = aprior;
