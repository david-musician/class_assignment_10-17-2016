var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controller/airplane');

//router.get('/airplane', ctrlAirplane.homelist);
//router.post('/airplane', ctrlAirplane.locationsCreate);

router.get('/', ctrlAirplane.index);

// Tables
router.get('/climbTable/:climbTableid', ctrlAirplane.climbTableReadOne);
router.get('/flapsTable/:flapsTableid', ctrlAirplane.flapsTableReadOne);
router.get('/landingTable/:landingTableid', ctrlAirplane.landingTableReadOne);

module.exports = router;
