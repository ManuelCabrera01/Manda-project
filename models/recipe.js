const mongoose                = require('mongoose');
const Schema                  = mongoose.Schema;
// const TYPES    = require('./recipe-types');

const RecipeSchema = new Schema({
  recipe        : { type: String, required: true },
  ingredients   : { type: String, required: true },
  instructions  : { type: String, required: true },
  _creator      : { type: Schema.ObjectId, ref: 'User', required: true },
  notes         : { type: String, required: true },
  imgUrl        : { type: String, default: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj0s-OG7ozXAhVJKyYKHWSYBMIQjRwIBw&url=https%3A%2F%2Fwww.nestleprofessional.us%2Frecipe%2Fbraised-beef-arepa&psig=AOvVaw0_lq-WpYMHQOi_zGwAwyPT&ust=1509058070218964" }

});
RecipeSchema.methods.belongsTo = function(user){
  return this._creator.equals(user._id);
}

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
