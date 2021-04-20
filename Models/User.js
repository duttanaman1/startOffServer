const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");

const userSchema = new Schema({
    userid: {
        type: Integer,
        required: [true]

    },
    username: {
        type: String,
        required: [true, 'first name is required']
    },
    firstName: {
        type: String,
        required: [false,'first name is required']
    },
    lastName: {
        type: String,
        required: [false,'last name is required']
    },
    email: {
        type: String,
        required: [true,'email is required']
    },
    password: {
        type: String,
        required: [true,'password is required']
    },
    phone: {
        type: Integer,
        required: [false, 'ph no is required'],
        minLength: 7,
        maxLength: 13
    },
    dob: {
        type: Date,
        required: [false,'Insert date of birth']
    },
    city: {
        type: String,
        required: [false,'City is required']
    },
    country: {
        type: String,
        required: [false],
        default:'Nepal'
    },
    Pincode: {
        type: Integer,
        required: [false, 'pincode is required'],
        minLength: 5,
        maxLength: 10
    },
    roles: {
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
