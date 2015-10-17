//Simple server sample!

var http = require('http');

var server = http.createServer();
server.listen(8080);
console.log('Listen to 8080!');

server.on('request', function(request, response){
  response.writeHead(200);
  response.write('Hello there!');
  response.end();
});

server.on('request', function(request, response) {
  console.log('Request incoming...');
});
