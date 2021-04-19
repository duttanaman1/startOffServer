var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var OrderSchema = new Schema({
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
        contentType:String
    },
    quantity: {
        type: Integer,
        required: [true]
    },
    total: {
        type: Integer,
        required: [true]
    },
    status: {
        type: Boolean,
        required: [true]
        default: false
    },
    orderdate: {
        type: Date,
        required: [true]
    },
    expecteddate: {
        type: Date,
        required: [true]
    },
    deliverydate: {
        type: Date,
        required: [false]
    },
    reviewid: {
        type: Integer,
        required: [true]
    }

});

// Create model from the schema
var Orderlist = mongoose.model("Orderlist", OrderSchema);

// Export model
module.exports = Orderlist;