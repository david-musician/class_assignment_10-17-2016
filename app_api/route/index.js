var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controller/airplane');

// reviews
router.get('/climbTable/:climbTableid', ctrlAirplane.climbTableReadOne);
router.get('/flapsTable/:flapsTableid', ctrlAirplane.flapsTableReadOne);
router.get('/landingTable/:landingTableid', ctrlAirplane.landingTableReadOne);

module.exports = router;
