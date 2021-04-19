var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
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