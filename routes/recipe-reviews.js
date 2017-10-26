const express = require('express');
const Recipe = require('../models/recipe');
const { ensureLoggedIn }                    = require('connect-ensure-login');

const router  = express.Router();

router.get('/recipes/:id/reviews/new', (req, res, next) => {
  let recipeId = req.params.recipeId;

  recipe.findById(recipeId, (err, recipe) => {
    if (err) { next(err); }
    res.render('recipe-reviews/new', { recipe: recipe });
  });
});

router.post('/recipes/:Id/reviews', (req, res, next) => {
  let recipeId = req.params.recipeId;

  recipe.findById(recipeId, (err, recipe) => {
    const newReview = new Review({
      content: req.body.content,
      stars: req.body.stars,
      author: req.body.author
    });

    recipe.reviews.push(newReview);

    recipe.save((err) => {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
});

module.exports = router;
