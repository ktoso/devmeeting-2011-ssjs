$(function() {
  var socket = new io.Socket('http://localhost:1337/');

  socket.connect();

  socket.on('connect', function(){
  });
  socket.on('message', function(){
  });
  socket.on('disconnect', function(){
  });
});
