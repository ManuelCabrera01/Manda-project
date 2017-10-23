const mongoose                = require('mongoose');
const Schema                  = mongoose.Schema;
// const TYPES    = require('./recipe-types');

const RecipeSchema = new Schema({
  recipe        : { type: String, required: true },
  ingredients   : { type: String, required: true },
  instructions  : { type: String, required: true },
  _creator      : { type: Schema.ObjectId, ref: 'User', required: true },
  notes         : { type: String, required: true },
  imgUrl        : { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=500x500&w=500&h=500" }

});
RecipeSchema.methods.belongsTo = function(user){
  return this._creator.equals(user._id);
}

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
