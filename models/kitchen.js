// const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;
// // const TYPES    = require('./kitchen-types');
//
// const KitchenSchema = new Schema({
//   kitchen            : String,
//   _creator              : { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   recipe             : [Schema.Types.ObjectId],
//   menber             : [Schema.Types.ObjectId]
// });
//
// KitchenSchema.methods.belongsTo = function(user){
//   return this._creator.equals(user._id);
// }
//
// const Kitchen = mongoose.model('kitchen', KitchenSchema);
// module.exports = Kitchen;
