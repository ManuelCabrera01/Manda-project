const express                   = require('express');
const kitchen                   = require('../models/kitchen');
// const TYPES                     = require('../models/kitchen-types');
const router                    = express.Router();
const { ensureLoggedIn }        = require('connect-ensure-login');

router.get('/createKitchen', (req, res) => {
 res.render('kitchen/new',{ types: TYPES });
});
//saving kitchen
router.post('/kitchen', ensureLoggedIn('/login'), (req, res, next) => {
  const newKitchen = new kitchen({
    kitchen: req.body.kitchen,
    _chef: req.user._id,
    menber  : req.body.menber,
    menberPosition : req.body.menberPosition ,
    recipe: req.body.recipe,

  });

    newKitchen.save( (err) => {
      if (err) {
        console.log("ERRROR: ", err);
        res.render('kitchen/show', { kitchen: newKitchen});
      } else {
        res.redirect(`/kitchen/${newkitchen._id}`);
      }
    });
 });

 router.get('/kitchen/:id', (req, res, next) => {
   Kitchen.findById(req.params.id, (err, kitchen) => {
     if (err){ return next(err); }

     kitchen.populate('_chef', (err, kitchen) => {
       if (err){ return next(err); }
       return res.render('kitchen/index', { kitchen });
     });
   });
 });





module.exports = router;
