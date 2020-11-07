var http = require('http');
var dt = require('./date');
var fs = require('fs');
var url = require('url');
var events = require('events');
var express = require('express');
const ejs = require('ejs');

var app = express();
var eventEmitter = new events.EventEmitter();

//http.createServer(function (req, res) {
//   // fs.readFile('mainpage.html', function(err, data) {

//   //   res.writeHead(200, {'Content-Type': 'text/html'});
//   //   res.write(data);

//   //   res.write("test");
//   //   return res.end();
//   // });

//   // res.write("The date and time are currently: " + dt.myDateTime());
//   // res.write("\n");
//   // res.write(req.url);

//   res.render('mainpage.html')

// }).listen(process.env.PORT || 5000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000);

// Root Route
app.get('/', function (req, res) {
	var time = 1;

    res.render('pages/index', {
    	time: time
    });
});