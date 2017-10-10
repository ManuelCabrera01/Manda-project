const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const TYPES    = require('./recipe-types');

const RecipeSchema = new Schema({
  recipe        : { type: String, required: true },
  ingredients   : { type: String, required: true },
  instructions  : { type: String, required: true },
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  notes         : { type: Date, required: true },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
