var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controller/airplane');

// Tables
router.get('/climbTable/:climbTableID', ctrlAirplane.climbTableRead);
router.get('/flapsTable/:flapsTableID', ctrlAirplane.flapsTableRead);
router.get('/landingTable/:landingTableID', ctrlAirplane.landingTableRead);

module.exports = router;