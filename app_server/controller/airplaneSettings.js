var ctrlAirplane = require('../../app_api/controller/airplane');

/* GET 'home' page */
module.exports.index = function(req, res) {
    res.render('index', { title: 'Airplane Data' })
};

module.exports.climbTable = function(req, res) {
    ctrlAirplane.climbTable(req, res);
};

module.exports.flapsTable = function(req, res) {
    ctrlAirplane.flapsTable(req, res);
};

module.exports.landingTable = function(req, res) {
    ctrlAirplane.landingTable(req, res);
};

module.exports.renderToJadeOne = function(res, content){
    res.render('climbTable', { table: content });
};

module.exports.renderToJadeTwo = function(res, content){
    res.render('flapsTable', { table: content });
};

module.exports.renderToJadeThree = function(res, content){
    res.render('landingTable', { table: content });
};