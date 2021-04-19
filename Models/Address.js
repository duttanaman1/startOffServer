var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    id: {
        type: Integer,
        required: [true]
    },
    userid: {
        type: Integer,
        required: [true]
    },
    Pincode: {
        type: Integer,
        required: [true, 'pincode is required'],
        minLength: 5,
        maxLength: 10
    },
    addrname: {
        type: String,
        required: [false]
    },
    City: {
        type: String,
        required: [true, 'City is required']
    },
    Country: {
        type: String,
        required: [true],
        default: 'Nepal'
    },
    addr: {
        type: String,
        required: [true]
    },
    description: {
        type: String,
        required: [false]
    }
});

// Create model from the schema
var Address = mongoose.model("Address", AddressSchema);

// Export model
module.exports = Address;