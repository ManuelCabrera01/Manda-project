const mongoose                = require('mongoose');
const Review                   = require('./review');
const Schema                  = mongoose.Schema;
// const TYPES    = require('./recipe-types');

const RecipeSchema = new Schema({
  recipe        : { type: String, required: true },
  cookTime  : { type :String, require : true},
  prepTime  : { type :String, require : true},
  ingredients  : { type: String, required: true },
  instructions  : { type: String, required: true },
  _creator      : { type: Schema.ObjectId, ref: 'User', required: true },
  notes         : { type: String, required: true },
  imgUrl        : { type: String },
 reviews        : [Review.schema],
 pic_path:       { type :String, require : true},
pic_name     :{ type :String, require : true},
});

RecipeSchema.methods.belongsTo = function(user){
  return this._creator.equals(user._id);
};

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
