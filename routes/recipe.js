const express                               = require('express');
const Recipe                                = require('../models/recipe');
const { ensureLoggedIn }                    = require('connect-ensure-login');
const { authorizeRecipe,checkOwnership }    = require('../middleware/recipe-authorization');
const router                                = express.Router();

// reden view that display the form that create new recipe
router.get('/new', ensureLoggedIn ('/login'), (req, res, next) => {
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
console.log("new recipe")

     newRecipe.save( (err) => {
       if (err) {
        //  console.log("ERRROR: ", err);
         res.render('recipe/new', { recipe: newRecipe});
       } else {
         res.redirect(`/recipe/${newRecipe._id}`);
       }
     });
  });

  router.get('/:id', checkOwnership, (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err){ return next(err); }

      recipe.populate('_creator', (err, recipe) => {
        if (err){ return next(err); }
        return res.render('recipe/show', {recipe});
      });
    });
  });




  router.get('/:id/edit',[ ensureLoggedIn('/login'), authorizeRecipe, ],(req, res, next) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err)       { return next(err) }
    if (!recipe) { return next(new Error("404") ) }
    return res.render('recipe/edit', { recipe});
  });
});


router.post('/:id',[ ensureLoggedIn('/login'), authorizeRecipe], (req, res, next) => {
  const updates = {
    recipe       : req.body.recipe,
    ingredients  : req.body.ingredients,
    instructions : req.body.instructions,
    // _creator     : req.user._id,
    notes        : req.body. notes

  };
  Recipe.findByIdAndUpdate(req.params.id, updates, (err, recipe) => {
    if (err) {console.log("unable to update");
    return res.render('recipe/edit', { recipe, errors: recipe.errors });
    }
    if (!recipe) { return next(new Error('404'));
    }
    return res.redirect(`/recipe/${recipe._id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Recipe.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }
    return res.redirect('/recipeBook');
  });

});



module.exports = router;
