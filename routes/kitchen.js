// const express                   = require('express');
// const kitchen                   = require('../models/kitchen');
// const router                    = express.Router();
// const { ensureLoggedIn }        = require('connect-ensure-login');
// const { authorizeKitchen,checkOwnership } = require('../middleware/kitchen-authorization');
//
// router.get('/createKitchen', (req, res) => {
//  res.render('kitchen/new');
// });
// //saving kitchen
// router.post('/kitchen', ensureLoggedIn('/login'), (req, res, next) => {
//   const newKitchen = new kitchen({
//     kitchen: req.body.kitchen,
//     _creator: req.user._id,
//     // menber  : req.body.menber,
//     // menberPosition : req.body.menberPosition ,
//     // recipe: req.body.recipe,
//
//   });
//
//     newKitchen.save( (err) => {
//       if (err) {
//         // console.log("ERRROR: ", err);
//         res.render('kitchen/new', { Kitchen: newKitchen});
//       } else {
//         res.redirect(`/kitchen/${newkitchen._id}`);
//       }
//     });
//  });
//
// router.get('/:id', checkOwnership, (req, res, next) => {
//    Kitchen.findById(req.params.id, (err, kitchen) => {
//      if (err){ return next(err); }
//
//      kitchen.populate('_creator', (err, kitchen) => {
//        if (err){ return next(err); }
//        return res.render('/index', { kitchen });
//      });
//    });
//  });
//
//
//  router.get('/:id/edit', ensureLoggedIn('/login'), authorizeKitchen, (req, res, next) => {
//   Kitchen.findById(req.params.id, (err, kitchen) => {
//     if (err)       { return next(err) }
//     if (!kitchen) { return next(new Error("404")) }
//     return res.render('kitchen/edit')
//   });
// });
//
//   router.post('/:id', ensureLoggedIn('/login'), authorizeKitchen, (req, res, next) => {
//
//   const updates = {
//     kitchen: req.body.kitchen,
//     menber: req.body.menber,
//     recipe: req.body.recipe,
//   };
//
//   Kitchen.findByIdAndUpdate(req.params.id, updates, (err, kitchen) => {
//       if (err) {
//         return res.render('kitchens/edit', {
//           kitchen,
//           errors: kitchen.errors
//         });
//       }
//       if (!kitchen) {
//         return next(new Error('404'));
//       }
//       return res.redirect(`/kitchens/${kitchen._id}`);
//     });
//   });
//
//
//
//
//
// module.exports = router;
