(function(require, console) {
    var mystatic = require('./mystatic');
    var io = require('socket.io');
    var nodeStatic = require('node-static');
    var publicFiles = new nodeStatic.Server('./public');

    statSrv = new mystatic.Server({ addr: "127.0.0.1",
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
    var chat = io.listen(statSrv.httpServer);
    chat.connect();

    chat.on('connect', function() {
    });

    chat.on('message', function() {
    });

    chat.on('disconnect', function() {
    });
})(require, console);
