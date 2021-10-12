var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Recordchema = new Schema(
  {
    key: { type: String, required: true, maxLength: 100},
    value: { type: String, required: true, maxLength: 100},
    createdAt: { type: Date },
    counts: [],
  }
);


//Export model
module.exports = mongoose.model('Record', Recordchema);