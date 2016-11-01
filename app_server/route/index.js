var express = require('express');
var router = express.Router();
var ctrlAircraftData = require('../controller/airplaneSettings');

// var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlAircraftData.index);
//router.get('/aircraftData', ctrlAircraftData.locationInfo);
//router.get('/location/review/new', ctrlAircraftData.addReview);

/* Other pages */
//router.get('/about', ctrlOthers.about);

module.exports = router;
