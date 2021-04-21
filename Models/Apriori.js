const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aprioriSchema = new Schema({
sim_pid:[[pid1:number, pid2:number]]
});

var Apriori = mongoose.model("Apriori", aprioriSchema);

module.exports = Apriori;