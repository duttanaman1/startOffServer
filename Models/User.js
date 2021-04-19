const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");

const userSchema = new Schema({
    id: {
        type: Integer,
        required: [true]

    },
    fname: {
        type: String,
        required: [true,'first name is required']
    },
    lname: {
        type: String,
        required: [true,'last name is required']
    },
    email: {
        type: String,
        required: [true,'email is required']
    },
    password: {
        type: String,
        required: [true,'password is required']
    },
    Mobile: {
        type: Integer,
        required: [true, 'ph no is required'],
        minLength: 10,
        maxLength: 13
    },
    DOB: {
        type: Date,
        required: [true,'Insert date of birth']
    },
    City: {
        type: String,
        required: [true,'City is required']
    },
    Country: {
        type: String,
        required: [true],
        default:'Nepal'
    },
    Pincode: {
        type: Integer,
        required: [true, 'pincode is required'],
        minLength: 5,
        maxLength: 10
    },
    Category: {
        type: String,
        required: [true],
        default: 'Consumer'
    },
    cart: {
        type: Schema.Types.ObjectID,
        ref:"Cart"
    },
    Orderlist: {
        type: Schema.Types.ObjectID,
        ref: "Orderlist"
    },
    Review: {
        type: Schema.Types.ObjectID,
        ref: "Review"
    },
    Address: {
        type: Schema.Types.ObjectID,
        ref: "Address"
    }    
});

var User = mongoose.model("User", userSchema);

module.exports = User;
