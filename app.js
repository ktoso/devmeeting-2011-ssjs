(function(require, console) {
    var mystatic = require('./mystatic');

    statSrv = new mystatic.Server({ addr: "127.0.0.1",
                                    port: 1337,
                                    files: ['png', 'css', 'jpg', 'html', 'gif', 'js']
                                  });


    statSrv.start();

    function handleError(request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(request.url);
    }

    statSrv.on('static', function(request, response) {
        console.log('static content'+ request.url)
    });

    statSrv.on('dynamic', function(request, response) {
        console.log('dynamic content' + request.url)
    });

    statSrv.on('error', function(request, response) {
        console.log('error'+ request.url);
    });

})(require, console);