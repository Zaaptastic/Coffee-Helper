var http = require('http');
var dt = require('./date');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  fs.readFile('mainpage.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  // res.write("The date and time are currently: " + dt.myDateTime());
  // res.write("\n");
  // res.write(req.url);


}).listen(8080);