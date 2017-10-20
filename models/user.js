const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./profession-types');


const userSchema = new Schema({
  email       : String,
  username    : String,
  password    : String,
  profession  : { type: String, enum: TYPES, required: true },
  imgUrl      : { type: String, default: "" }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
