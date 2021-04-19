var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var cartSchema = new Schema({
    id: {
        type: Integer,
        required: [true]
    },
    userid: {
        type: Integer,
        required: [true]
    },
    productid: {
        type: Integer,
        required: [true]
    },
    productname: {
        type: String,
        required: [true]
    },
    img: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Integer,
        required: [true]
    },
    total: {
        type: Integer,
        required: [true]
    },
});

// Create model from the schema
var Cart = mongoose.model("Cart", cartSchema);

// Export model
module.exports = Cart;