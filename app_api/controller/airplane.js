var mongoose = require('mongoose');
// Bring in the model
var ClimbTable = mongoose.model('ClimbTable');
var FlapsTable = mongoose.model('FlapsTable');
var LandingTable = mongoose.model('LandingTable');


// utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET data by the id for ClimbTable */
module.exports.climbTableReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.climbTableid) {
    ClimbTable
      .findById(req.params.climbTableid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "climbTableid not found"
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
    console.log('No climbTableid specified');
    sendJSONresponse(res, 404, {
      "message": "No climbTableid in request"
    });
  }
};

/* GET data by the id for FlapsTable */
module.exports.flapsTableReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.flapsTableid) {
    FlapsTable
      .findById(req.params.flapsTableid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "flapsTableid not found"
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
    console.log('No flapsTableid specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsTableid in request"
    });
  }
};

/* GET data by the id for LandingTable */
module.exports.landingTableReadOne = function(req, res) {
  console.log('Finding location details', req.params);
  if (req.params && req.params.landingTableid) {
    LandingTable
      .findById(req.params.landingTableid)
      .exec(function(err, location) {
        if (!location) {
          sendJSONresponse(res, 404, {
            "message": "landingTableid not found"
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
    console.log('No landingTableid specified');
    sendJSONresponse(res, 404, {
      "message": "No landingTableid in request"
    });
  }
};