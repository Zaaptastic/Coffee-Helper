var http = require('http');
var fs = require('fs');
var url = require('url');
var events = require('events');
var express = require('express');
const ejs = require('ejs');

var app = express();
var eventEmitter = new events.EventEmitter();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000);

// Root Route
app.get('/', function (req, res) {

    res.render('pages/init', {

    });

});

app.post('/timer', function (req, res) {
	var totalWeight = req.body.weight;
	var stepWeight = Math.floor(totalWeight / 5);
	res.render('pages/timer', {
		step1: stepWeight,
		step2: stepWeight * 2,
		step3: stepWeight * 3,
		step4: stepWeight * 4,
		step5: totalWeight
	});
});
