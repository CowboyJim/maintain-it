'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MaintItemSchema = new Schema({
  name: {type:String, required: true, index: true },
  description: String,
  frequency: {
  	miles: String,
  	days: Number
  },
  active: Boolean
});

module.exports = mongoose.model('MaintItem', MaintItemSchema);