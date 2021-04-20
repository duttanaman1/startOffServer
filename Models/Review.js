var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    id: {
        type: Number,
        required: [true]
    },
    userid: {
        type: Number,
        required: [true]
    },
    productid: {
        type: Number,
        required: [true]
    },
    stars: {
        type: Number,
        required: true
        default:0
    },
    review: {
        type: String,
        required: false
    }
});

// Create model from the schema
var Review = mongoose.model("Review", ReviewSchema);

// Export model
module.exports = Review;