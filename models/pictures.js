const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const pictureSchema = new Schema({
  name: String,
  pic_path: String,
  pic_name: String
});

var Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;
