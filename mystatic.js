var utils = require('util'),
    publicFiles = new nodeStatic.Server('./public'),
    EventEmitter = require('events').EventEmitter;

exports.Server = function(conf) {
    var addr = conf.addr;
    var port = conf.port;
    var files = conf.files;


    function isRightFileFormat(url) {
        return url.match(/\.(png|css|jpg|html|gif|js)$/);
    }

    http.createServer(
            function (request, response) {
                if (request.method !== 'GET') {
                    return handleError(request, response);
                }
                if (!isRightFileFormat(request.url)) {
                    return handleError(request, response);
                }

                request.addListener('end', function () {
                    publicFiles.serve(request, response);
                });
            }).listen(port, addr);

    console.log('Server running at http://127.0.0.1:1337/');

}