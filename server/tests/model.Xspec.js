'use strict';

var should = require('should');
var mongoose = require('mongoose');
var model = require('../components/model');


/*
 
 
 */
describe('test Vehicle CRUD', function() {

    var Vehicle;
    var db;

    before(function() {
        db = mongoose.createConnection('mongodb://localhost/test');
        db.on('error', function() {
            console.log('Error connecting to database');
        }).should.not.throw('DB connection failed');

        //console.log('run before all test...'); 
    });
    after(function() {
        db.close();
        //mongoose.disconnect(function(){});  
    });

    describe('creat a vehicle', function() {
        it('should be created', function() {
            Vehicle = new model.Vehicle({
                name: 'Element',
                make: 'Honda',
                model: 'Element',
                year: '2005',
                odometer: {
                    date: new Date(),
                    current: '920450',
                    estimated: '93200'
                }
            });
            Vehicle.save(function(err, product, count){
                (err === null).should.be.true;
                should(count).equal(1);

            });

            console.log('run create test...');
           // should.equal('a', x);

        });
    });

    describe('updating a vehicle', function() {
        it('should be updating', function() {
            console.log('run update test...');
        });

    });

    describe('deleting', function() {
        it('should be deleting', function() {
            console.log('run delete test...');
        });
    });



    /*
    beforeEach('---each test', function() {
        console.log('run before each test...');

    });

*/
});