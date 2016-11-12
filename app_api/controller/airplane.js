var mongoose = require('mongoose');

// Bring in the models
var ClimbTable = mongoose.model('ClimbTable');
var FlapsTable = mongoose.model('FlapsTable');
var LandingTable = mongoose.model('LandingTable');

var ctrlAirplane = require('../../app_server/controller/airplaneSettings');

module.exports.index = function(req, res) {
    res.render('index', { title: 'Airplane Data' })
};

// utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

module.exports.climbTable = function(req, res){
  var _table=[];
  ClimbTable.find({}, function(err, _x){
    for (var i = 0; i < _x.length; i++)
    {
      //_table.push(_x[i].weight);
      //_table.push(_x[i].VFRIFlap5);
      //_table.push(_x[i].VFRIFlap10);
      //_table.push(_x[i].VFRIFlap15);
      //_table.push(_x[i].VCLMB);
    }
    ctrlAirplane.renderToJadeOne(res, _table);
  });
};

module.exports.flapsTable = function(req, res){
  var _table=[];
  var _c = 0;
  FlapsTable.find({}, function(err, _x){
    for (var i = 0; i < _x.length; i++)
    {
      //_table.push(_x[i].weight);
      //_table.push(_x[i].VFRIFlap5);
      //_table.push(_x[i].VFRIFlap10);
      //_table.push(_x[i].VFRIFlap15);
      //_table.push(_x[i].VCLMB);
    }
    ctrlAirplane.renderToJadeOne(res, _table);
  });
};

module.exports.landingTable = function(req, res){
  var _table=[];
  FlapsTable.find({}, function(err, _x){
    for (var i = 0; i < _x.length; i++)
    {
      //_table.push(_x[i].weight);
      //_table.push(_x[i].VFRIFlap5);
      //_table.push(_x[i].VFRIFlap10);
      //_table.push(_x[i].VFRIFlap15);
      //_table.push(_x[i].VCLMB);
    }
    ctrlAirplane.renderToJadeOne(res, _table);
  });
};

/* GET data by the id for ClimbTable */
module.exports.climbTableRead = function(req, res) {
  console.log('Finding Climb Table values', req.params);
  if (req.params && req.params.climbTableID) {
    ClimbTable
      .findById(req.params.climbTableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "climbTableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No climbTableID specified');
    sendJSONresponse(res, 404, {
      "message": "No climbTableID in request"
    });
  }
};

/* GET data by the id for FlapsTable */
module.exports.flapsTableRead = function(req, res) {
  console.log('Finding Flaps Table values', req.params);
  if (req.params && req.params.flapsTableID) {
    FlapsTable
      .findById(req.params.flapsTableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flapsTableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No flapsTableID specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsTableID in request"
    });
  }
};

/* GET data by the id for LandingTable */
module.exports.landingTableRead = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.landingTableID) {
    LandingTable
      .findById(req.params.landingTableID)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "landingTableID not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(location);
        sendJSONresponse(res, 200, location);
      });
  } else {
    console.log('No landingTableID specified');
    sendJSONresponse(res, 404, {
      "message": "No landingTableID in request"
    });
  }
};