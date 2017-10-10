const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email      : String,
  username   : String,
  password   : String,
  profession : String,
  imgUrl     : { type: String, default: "https://vignette.wikia.nocookie.net/doom/images/4/4c/Chef-hat-png-13.png/revision/latest?cb=20170308012617" }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
