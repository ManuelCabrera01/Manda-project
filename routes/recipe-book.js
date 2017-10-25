const express            = require('express');
const router             = express.Router();
const Recipe             = require('../models/recipe');


router.get('/recipeBook', (req, res, next) => {
  Recipe
     .find({})
     .populate('_creator')
     .exec((err, recipe) => {
       res.render('recipe-book', { recipe }) ;
     });;
});

module.exports = router;
