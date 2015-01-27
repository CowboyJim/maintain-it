'use strict';

var _ = require('lodash');
var MaintItem = require('./maint_item.model');

// Get list of maint_items
exports.index = function(req, res) {
  MaintItem.find(function (err, maint_items) {
    if(err) { return handleError(res, err); }
    return res.json(200, maint_items);
  });
};

// Get a single maint_item
exports.show = function(req, res) {
  MaintItem.findById(req.params.id, function (err, maint_item) {
    if(err) { return handleError(res, err); }
    if(!maint_item) { return res.send(404); }
    return res.json(maint_item);
  });
};

// Creates a new maint_item in the DB.
exports.create = function(req, res) {
  MaintItem.create(req.body, function(err, maint_item) {
    if(err) { return handleError(res, err); }
    return res.json(201, maint_item);
  });
};

// Updates an existing maint_item in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MaintItem.findById(req.params.id, function (err, maint_item) {
    if (err) { return handleError(res, err); }
    if(!maint_item) { return res.send(404); }
    var updated = _.merge(maint_item, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, maint_item);
    });
  });
};

// Deletes a maint_item from the DB.
exports.destroy = function(req, res) {
  MaintItem.findById(req.params.id, function (err, maint_item) {
    if(err) { return handleError(res, err); }
    if(!maint_item) { return res.send(404); }
    maint_item.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}