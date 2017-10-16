const express            = require('express');
const router             = express.Router();
const Recipe             = require('../models/recipe');
const Picture            = require('../models/pictures');
const multer             = require('multer');

router.get('/', (req, res, next) => {
  Recipe
     .find({})
     .populate('_creator')
     .exec((err, recipe) => {
       res.render('index.ejs', { recipe });
     });;
});

const  upload = multer({ dest: './public/uploads/' });

// router.post('/upload', upload.single('photo'), function(req, res){
//
//   const pic = new Picture({
//     name: req.body.name,
//     pic_path: `/uploads/${req.file.filename}`,
//     pic_name: req.file.originalname
//   });
//
//   pic.save((err) => {
//       res.redirect('/');
//   });
// });

router.get('/', function(req, res, next) {
  Picture.find((err, pictures) => {
    res.render('index', {pictures})
  })
});
module.exports = router;
