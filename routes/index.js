const express            = require('express');
const router             = express.Router();
const Recipe             = require('../models/recipe');
// const Picture            = require('../models/requestJOb');
// const multer             = require('multer');

router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/', (req, res, next) => {
//   Recipe
//      .find({})
//      .populate('_creator')
//      .exec((err, recipe) => {
//        res.render('index', { recipe });
//      });;
// });




// router.get('/', function(req, res, next) {
//   Picture.find((err, pictures) => {
//     res.render('index', {pictures})
//   })
// });


// code for picture uipload




// router.get('/', function(req, res, next) {
//   Picture.find((err, requestJob) => {
//     res.render('index', {requestJob})
//   })
// });




module.exports = router;
