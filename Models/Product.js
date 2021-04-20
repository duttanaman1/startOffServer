const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");

const productSchema = new Schema({
    id: {
        type: Integer,
        required: [true]

    },
    productname: {
        type: String,
        required: [true, 'product name is required']
    },
    userid: {
        type: Integer,
        required: [true]
    },
    productid: {
        type: Integer,
        required: [true]
    },
    description: {
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
    rate: {
        type: Integer,
        required: [true]
    },
    weight: {
        type: Integer,
        required: [true]
    },
    tag: [{ tag: String }],
    promotions: {
        type: Schema.Types.ObjectID,
        ref:"Promotions"
    }, Review: {
        type: Schema.Types.ObjectID,
        ref: "Review"
    }
    
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
