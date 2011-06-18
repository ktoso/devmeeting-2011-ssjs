var http = require('http');

var nodeStatic = require('node-static');
var publicFiles = new nodeStatic.Server('./public');

function handleError(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(request.url);
}

function isRightFileFormat(url) {
  return url.match(/\.(png|css|jpg|html|gif|js)$/);
}

http.createServer(function (request, response) {
  if(request.method !== 'GET') { return handleError(request, response); }
  if(!isRightFileFormat(request.url)) { return handleError(request, response); }

  request.addListener('end', function () {
    publicFiles.serve(request, response);
  });
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
