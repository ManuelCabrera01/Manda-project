const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  coment: String,
  stars: Number,
  author: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
