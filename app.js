(function(require, console) {
    var http = require('http');
    var mystatic = require('./mystatic');

    statSrv = mystatic.Server({ addr: "127.0.0.1",
                                port: 1337,
                                files: ['png', 'css', 'jpg', 'html', 'gif', 'js']
                              });


    function handleError(request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(request.url);
    }

    statSrv.on('static', function(data) {
        console.log('static content')
    });

    statSrv.on('dynamic', function(data) {
        console.log('dynamic content')
    });

    statSrv.on('error', function(data) {
        console.log('error');
    });

};