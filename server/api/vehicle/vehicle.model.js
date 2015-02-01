'use strict';

var mongoose = require('mongoose');

var odometerSchema = mongoose.Schema({
        date: {type: Date, required: true},     
        current: Number,
        estimated: Number,
        isEstimated: {type: Boolean, default: false}
});

var vehicleSchema = mongoose.Schema({
    name: {type:String, required: true, index: true },
    make: String,
    model: String,
    year: Number,
    odometer: {
        date: {type: Date, required: true},     
        current: Number,
        estimated: Number,
        isEstimated: {type: Boolean, default: false}        
    }
});

vehicleSchema.methods.description = function(){
    return this.year + " " + this.make + " " + this.model;    
};
 
module.exports = mongoose.model('Vehicle', vehicleSchema);