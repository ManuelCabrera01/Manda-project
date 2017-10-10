const express  = require('express');
const Recipe = require('../models/recipe');
const router   = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');

// reden view that display the form that create new recipe
router.get('/new', (req, res) => {
 res.render('recipe/new');
});

//  saving new recipe
router.post('/', ensureLoggedIn('/login'), (req, res, next) => {
  const newRecipe = new Recipe({
     recipe       : req.body.recipe,
     ingredients  : req.body.ingredients,
     instructions : req.body.instructions,
     _creator     : req.user._id,
     notes        : req.body. notes
     });

     newRecipe.save( (err) => {
       if (err) {
         res.render('recipe/new', { recipe: newRecipe,});
       } else {
         res.redirect(`/recipe/${newRecipe._id}`);
       }
     });
  });

module.exports = router;
