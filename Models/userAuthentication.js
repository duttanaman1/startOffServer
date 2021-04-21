const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");
const userAuthenticationSchema = new Schema({
  userid: {
    type: Number,
    required: [true],
  },
  username: {
    type: String,
    required: [true, "first name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  roles: {
    type: String,
    required: [true],
    default: "Consumer",
  },
});

var userAuthentication = mongoose.model(
  "userAuthentication",
  userAuthenticationSchema
);

module.exports = userAuthentication;
