const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    code: {
        type: String,
        required: [true]
    },
    discount: {
        type: Integer,
        required: [true],
    },
    expdate: {
        type: Date,
        required: [false]
    }
});

var Promotions = mongoose.model("Promotions", promoSchema);

module.exports = Promotions;
