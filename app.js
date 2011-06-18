(function(require, console) {
    var mystatic = require('./mystatic');
    var io = require('socket.io');
    var nodeStatic = require('node-static');
    var publicFiles = new nodeStatic.Server('./public');

    statSrv = new mystatic.Server({ addr: "localhost",
                                    port: 1337,
                                    files: ['png', 'css', 'jpg', 'html', 'gif', 'js']
                                  });


    statSrv.start();

    function log(msg) {
      console.log(new Date().toTimeString() + ' ' + msg);
    }

    // STATIC FILE HANDLING

    function handleError(request, response) {
      log("ERROR " + request.url);
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(request.url);
    }

    function handleStatic(request, response) {
      log("GET " + request.url);
      publicFiles.serve(request, response);
    }

    statSrv.on('dynamic', function(request, response) {
        console.log('dynamic content' + request.url);
        response.end();
    });

    statSrv.on('static', handleStatic);
    statSrv.on('error', handleError);

    // CHAT
    var http = require('http');
    var chatServer = http.createServer(function(req, res){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello world</h1>');
    });
    chatServer.listen(6666);

    var chat = io.listen(chatServer);

    chat.on('connection', function(client) {
      log('CHAT connect');

      client.on('message', function() {
        log('CHAT message');
      });

      client.on('disconnect', function() {
        log('CHAT disconnect');
      });
    });

})(require, console);
