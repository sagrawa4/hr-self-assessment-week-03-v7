var url = require('url');
var http = require('http');
var path = require('path');


var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  console.log(endpoint);
  var property = endpoint.replace(/^\//, '');

  module.exports.count = path.join('.', property);


  var count = 0;
  if (request.method === 'POST' && request.endpoint === ) {
    var counter = globalCounter.count++;
    // YOUR CODE HERE
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    request.on('data', () => {
      counter;
    });
    response.end();
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.write("data");
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
