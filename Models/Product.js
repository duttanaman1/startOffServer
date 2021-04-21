const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");

const productSchema = new Schema({
  id: {
    type: Number,
    required: [true],
  },
  productname: {
    type: String,
    required: [true, "product name is required"],
  },
  userid: {
    type: Number,
    required: [true],
  },
  productid: {
    type: Number,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  stock: {
    type: Number,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  rate: {
    type: Number,
    required: [true],
  },
  costprice: {
    type: Number,
    required: [true],
  },
  weight: {
    type: Number,
    required: [true],
  },
  tag: [{ tag: String }],
  promotions: {
    type: Schema.Types.ObjectID,
    ref: "Promotions",
  },
  Review: {
    type: Schema.Types.ObjectID,
    ref: "Review",
  },
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
