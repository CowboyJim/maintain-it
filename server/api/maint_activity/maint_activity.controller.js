'use strict';

var _ = require('lodash');
var MaintActivity = require('./maint_activity.model');

// Get list of maint_activitys
exports.index = function(req, res) {
  MaintActivity.find(function (err, maint_activitys) {
    if(err) { return handleError(res, err); }
    return res.json(200, maint_activitys);
  });
};

// Get a single maint_activity
exports.show = function(req, res) {
  MaintActivity.findById(req.params.id, function (err, maint_activity) {
    if(err) { return handleError(res, err); }
    if(!maint_activity) { return res.send(404); }
    return res.json(maint_activity);
  });
};

// Creates a new maint_activity in the DB.
exports.create = function(req, res) {
  MaintActivity.create(req.body, function(err, maint_activity) {
    if(err) { return handleError(res, err); }
    return res.json(201, maint_activity);
  });
};

// Updates an existing maint_activity in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MaintActivity.findById(req.params.id, function (err, maint_activity) {
    if (err) { return handleError(res, err); }
    if(!maint_activity) { return res.send(404); }
    var updated = _.merge(maint_activity, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, maint_activity);
    });
  });
};

// Deletes a maint_activity from the DB.
exports.destroy = function(req, res) {
  MaintActivity.findById(req.params.id, function (err, maint_activity) {
    if(err) { return handleError(res, err); }
    if(!maint_activity) { return res.send(404); }
    maint_activity.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}