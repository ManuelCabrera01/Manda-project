const express                               = require('express');
const Recipe                                = require('../models/recipe');
const router                                = express.Router();
const { ensureLoggedIn }                    = require('connect-ensure-login');
const { authorizeRecipe,checkOwnership }    = require('../middleware/recipe-authorization');

// reden view that display the form that create new recipe
router.get('/new', (req, res) => {
 res.render('recipe/new');
});

//  saving new recipe
router.post('/recipe', ensureLoggedIn('/login'), (req, res, next) => {
  const newRecipe = new Recipe({
     recipe       : req.body.recipe,
     ingredients  : req.body.ingredients,
     instructions : req.body.instructions,
     _creator     : req.user._id,
     notes        : req.body. notes
     });

     newRecipe.save( (err) => {
       if (err) {
        //  console.log("ERRROR: ", err);
         res.render('recipe/new', { Recipe: newRecipe});
       } else {
         res.redirect(`/recipe/${newRecipe._id}`);
       }
     });
  });
  router.get('/:id/edit', ensureLoggedIn('/login'), authorizeRecipe, (req, res, next) => {
  recipe.findById(req.params.id, (err, recipe) => {
    if (err)       { return next(err) }
    if (!recipe) { return next(new Error("404") ) }
    return res.render('recipe/edit', { recipe})
  });
});

router.post('/:id', ensureLoggedIn('/login'), authorizeRecipe, (req, res, next) => {
  const updates = {
    recipe       : req.body.recipe,
    ingredients  : req.body.ingredients,
    instructions : req.body.instructions,
    _creator     : req.user._id,
    notes        : req.body. notes

  };
  Recipe.findByIdAndUpdate(req.params.id, updates, (err, Recipe) => {
    if (err) {
      console.log("unable to update");
      return res.render('recipe/edit', {
        Recipe,
        errors: recipe.errors
      });
    }
    if (!Recipe) {
      return next(new Error('404'));
    }
    return res.redirect(`/recipe/${recipe._id}`);
  });
});


  router.get('/:id', checkOwnership, (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err){ return next(err); }

      recipe.populate('_creator', (err, recipe) => {
        if (err){ return next(err); }
        return res.render('recipe/show', { recipe });
      });
    });
  });

module.exports = router;








// router.post('/job/new', ensureLoggedIn(), upload.single('photo'), (req, res) => {
//     const pic = new Picture ({
//       name: req.body.name,
//       pic_path: `/uploads/${req.file.filename}`,
//       pic_name: req.body.picName
//     })
//     pic.save((err) => {
//         res.redirect('/');
//     });
// });
