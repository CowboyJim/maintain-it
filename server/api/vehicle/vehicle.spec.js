'use strict';

var mongoose = require('mongoose');
var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Vehicle = require('./vehicle.model');

describe('GET /api/vehicles', function() {

    it('should respond with JSON array', function(done) {
        request(app)
            .get('/api/vehicles')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                res.body.should.be.instanceof(Array);
                done();
            });
    });
});

describe('test Vehicle CRUD', function() {

    var vehicle;
    var db;

    before(function() {
        db = mongoose.createConnection('mongodb://localhost/test');
        db.on('error', function() {
            console.log('Error connecting to database');
        }).should.not.throw('DB connection failed');
        Vehicle.remove({}, function(err) {
            if (err) should.fail;
        })
    });
    after(function() {
        db.close();
        mongoose.disconnect();
    });

    describe('create a vehicle', function() {
        it('should be created', function() {
            vehicle = new Vehicle({
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
            vehicle.save(function(err, savedVehicle, count) {
                (err === null).should.be.true;
                should(count).equal(1);
                should(savedVehicle).not.equal.null;
                //                console.log("savedVehicle.description() = " + savedVehicle.description());


                Vehicle.findOne({
                    name: 'Element'
                }, function(err, veh) {
                    if (err) should.fail;
                    console.log("veh.description() = " + veh.description());
                });

            });
        });
    });

    describe('update a vehicle', function() {
        it('should be updating', function() {
            Vehicle.update({
                name: 'Element'
            }, {
                'odometer.current': '10000'
            }, function(err, num, raw) {
                if (err) should.fail;
                //should(num).equal(1);
                // console.log("Updated result: " + raw);

                Vehicle.find({
                    name: /Element/
                }, function(err, vehicle) {
                    if (err) should.fail;
                    should(vehicle[0].odometer.current).equal(10000);
                });
            });
        });
    });
    describe('get description', function() {
        it('should be the model description', function() {
            Vehicle.findOne({
                name: 'Element'
            }, function(err, vehicle) {
                if (err) should.fail;
                should(vehicle.description()).not.be.undefined
                console.log(vehicle.description());
            });
        });
    });

    describe('deleting', function() {
        it('should be deleting', function() {
            vehicle.remove({
                name: 'Element'
            }, function(err) {
                if (err) should.fail;
                console.log('run delete test...');
                Vehicle.count({}, function(err, count) {
                    should(count).equal(0);
                });

            });
        });
    });
});