var util = require('util'),
        http = require('http'),
        nodeStatic = require('node-static'),
        publicFiles = new nodeStatic.Server('./public'),
        EventEmitter = require('events').EventEmitter;

var server = function(conf) {
    var self = this;
    var addr = conf.addr;
    var port = conf.port;
    var files = conf.files;

    var staticData = function(request, response) {
        self.emit("static", request, response);
    };

    var dynamicData = function(request, response) {
        self.emit("dynamic", request, response);
    };

    var errorData = function(request, response) {
        self.emit("error", request, response);
    };

    var isRightFileFormat = function (url) {
        return url.match(/\.(png|css|jpg|html|gif|js)$/);
    };

    this.handle = function (request, response) {
        if (request.method !== 'GET') {
            return errorData(request, response);
        }
        if (!isRightFileFormat(request.url)) {
            return errorData(request, response);
        }

        request.addListener('end', function () {
            return staticData(request, response);
        });
    };

    this.start = function() {
        http.createServer(this.handle).listen(port, addr);
    };

    console.log('Server running at http://127.0.0.1:1337/');

};
1

util.inherits(server, EventEmitter);

exports.Server = server;
