/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Vechicle = require('../api/vehicle/vehicle.model')


Vechicle.find({}).remove(function() {
    Vechicle.create({
        name: 'Element',
        make: 'Honda',
        model: 'Element',
        year: '2005',
        odometer: {
            date: new Date(),
            current: '920450',
            estimated: '93200'
        }
    }, {
        name: 'Van',
        make: 'Honda',
        model: 'Odyssey',
        year: '2002',
        odometer: {
            date: new Date(),
            current: '169300'
        }
    }, {
        name: 'Civic',
        make: 'Honda',
        model: 'Civic',
        year: '1999',
        odometer: {
            date: new Date(),
            current: '104000'
        }
    })
})