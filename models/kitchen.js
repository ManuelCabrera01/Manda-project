const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./kitchen-types');

const KitchenSchema = new Schema({
  kitchen            : String,
  _chef              : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  menber             : String,
  menberPosition     : { type: String, enum: TYPES, required: true },
  recipe             : String

});
KitchenSchema.methods.belongsTo = function(user){
  return this._chef.equals(user._id);
}

const kitchen = mongoose.model('kitchen', KitchenSchema);
module.exports = kitchen;
