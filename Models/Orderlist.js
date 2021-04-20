var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  id: {
    type: Number,
    required: [true],
  },
  userid: {
    type: Number,
    required: [true],
  },
  productid: {
    type: Number,
    required: [true],
  },
  productname: {
    type: String,
    required: [true],
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  quantity: {
    type: Number,
    required: [true],
  },
  total: {
    type: Number,
    required: [true],
  },
  status: {
    type: Boolean,
    required: [true],
    default: false,
  },
  orderdate: {
    type: Date,
    required: [true],
  },
  expecteddate: {
    type: Date,
    required: [true],
  },
  deliverydate: {
    type: Date,
    required: [false],
  },
  reviewid: {
    type: Number,
    required: [true],
  },
});

// Create model from the schema
var Orderlist = mongoose.model("Orderlist", OrderSchema);

// Export model
module.exports = Orderlist;
