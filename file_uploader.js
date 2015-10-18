//Simple server sample!

var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.listen(8080);
console.log('Listen to 8080!');

server.on('request', function(request, response){
  var newFile = fs.createWriteStream("copy_file_from_request");
  var fileBytes = request.headers['content-length'];
  var uploadBytes = 0;

  request.on('readable', function() {
    var chunk = null;
      while (null != (chunk = request.read())) {
        uploadBytes += chunk.length;
        var progress =  (uploadBytes / fileBytes) * 100;
        response.write("Progress " + parseInt(progress, 10) + "%\n");
      }
    });

    request.on('end', function() {
      response.end('uploaded!');
    });
    request.pipe(newFile);
});

server.on('request', function(request, response) {
  console.log('Request incoming...');
});
