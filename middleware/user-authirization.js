const User                    = require('../models/user.js');

function checkOwnershipOThepage(req, res, next){
  User.findById(req.params.id, (err, user) => {
    if (err){ return next(err) }
    if (!user){ return next(new Error('404')) }



   if (user.belongsTo(req.user)){
      res.locals.IsCurrentUsers = true;
    } else {
      res.locals.IsCurrentUsers = false;
    }
    return next()
  });
}


module.exports = {checkOwnershipOThepage}
