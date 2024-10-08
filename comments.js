// Create web server
var http = require('http');

// Create the server
var server = http.createServer(function (req, res) {
  // Set the response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('Hello World\n');
});

// Start the server
server.listen(3000, '');