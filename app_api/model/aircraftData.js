var mongoose = require('mongoose');

var ClimbTable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

var FlapsTable = new mongoose.Schema({
	flaps: String,
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var LandingTable = new mongoose.Schema({
	flaps: String,
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

mongoose.model('ClimbTable', ClimbTable, 'ClimbTable');
mongoose.model('FlapsTable', FlapsTable, 'FlapsTable');
mongoose.model('LandingTable', LandingTable, 'LandingTable');
