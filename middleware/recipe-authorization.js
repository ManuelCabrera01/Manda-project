const Recipe                    = require('../models/recipe.js');

function authorizeRecipe(req, res, next){
  Recipe.findById(req.params.id, (err, recipe) => {
    // If there's an error, forward it
    if (err)      { return next(err) }
    // If there is no recipe, return a 404
    if (!recipe){ return next(new Error('404')) }
    // If the recipe belongs to the user, next()
    if (recipe.belongsTo(req.user)){
        return next()
      } else {
        return res.redirect(`/recipe/${recipe._id}`)
      }
    });
}
function checkOwnership(req, res, next){
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err){ return next(err) }
    if (!recipe){ return next(new Error('404')) }



   if (recipe.belongsTo(req.user)){
      res.locals.recipeIsCurrentUsers = true;
    } else {
      res.locals.recipeIsCurrentUsers = false;
    }
    return next()
  });
}
module.exports = {authorizeRecipe,checkOwnership}
