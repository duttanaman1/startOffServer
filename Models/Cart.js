var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cartSchema = new Schema({
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
});

// Create model from the schema
var Cart = mongoose.model("Cart", cartSchema);

// Export model
module.exports = Cart;
