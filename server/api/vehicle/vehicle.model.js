'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    name: {type:String, required: true, index: true },
    make: String,
    model: String,
    year: Number,
    odometer: {
    	date: Date,    	
        current: Number,
        estimated: Number
    }

});
module.exports = mongoose.model('Vehicle', VehicleSchema);