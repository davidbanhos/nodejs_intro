# Simple server sample!

var http = require('http');

http.createServer(function(request,response) {
  response.writeHead(200);
  response.write('Hello there!');
  response.end();
}).listen(8080);

console.log('Listen to 8080!');
