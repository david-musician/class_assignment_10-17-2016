var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://class-assignment-david-musician.c9users.io/airplane';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app termination', function() {
        process.exit(0);
    });
});

/* BRING IN SCHEMAS & MODELS */
// Schemas
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

//Models
mongoose.model('ClimbTable', ClimbTable, 'ClimbTable');
mongoose.model('FlapsTable', FlapsTable, 'FlapsTable');
mongoose.model('LandingTable', LandingTable, 'LandingTable');