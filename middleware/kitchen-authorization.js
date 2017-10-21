// const Kitchen = require('../models/kitchen.js');
//
// function authorizeKitchen(req, res, next){
//   Kitchen.findById(req.params.id, (err, kitchen) => {
//     // If there's an error, forward it
//     if (err)      { return next(err) }
//     // If there is no kitchen, return a 404
//     if (!kitchen){ return next(new Error('404')) }
//     // If the kitchen belongs to the user, next()
//     if (Kitchen.belongsTo(req.user)){
//       return next()
//     } else {
//       return res.redirect(`/kitchens/${kitchen._id}`)
//     }
//   });
// }
//
// function checkOwnership(req, res, next){
//   Kitchen.findById(req.params.id, (err, kitchen) => {
//     if (err){ return next(err) }
//     if (!kitchen){ return next(new Error('404')) }
//
//     if (kitchen.belongsTo(req.user)){
//       res.locals.kitchenIsCurrentUsers = true;
//     } else {
//       res.locals.kitchenIsCurrentUsers = false;
//     }
//     return next()
//   });
// }
//
//
// module.exports = {authorizeKitchen,checkOwnership}
