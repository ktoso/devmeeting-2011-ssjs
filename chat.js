var chat = function () {

    var http = require('http'),
            io = require('socket.io'),
            server = http.createServer(function(req, res) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Hello world</h1>');
            });
    server.listen(80);

    // socket.io
    var socket = io.listen(server);
    socket.on('connection', function(client) {
        // new client is here!
        client.on('message', function() {
            console.log('')
        });

        client.on('disconnect', function() {

        });
    });

};

exports.Chat = chat;