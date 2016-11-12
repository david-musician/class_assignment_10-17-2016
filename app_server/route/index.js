var express = require('express');
var router = express.Router();
var ctrlAircraftData = require('../controller/airplaneSettings');

/* Routes to views */
router.get('/', ctrlAircraftData.index);
router.get('/climbTable/', ctrlAircraftData.climbTable);
router.get('/flapsTable/', ctrlAircraftData.flapsTable);
router.get('/landingTable/', ctrlAircraftData.landingTable);

module.exports = router;