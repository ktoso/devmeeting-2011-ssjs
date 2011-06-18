$(function() {
  var socket = new io.Socket('http://localhost:6666/');

  socket.connect();

  socket.on('connect', function(){
    console.log('connect');
  });
  socket.on('message', function(){
    console.log('message');
  });

  socket.on('disconnect', function(){
    console.log('disconnect');
  });

  $('#sendmsg').click(function() {
    console.log('sending msg');
    socket.send({type: 'message', author: 'me', msg: 'hello'});
  });
});
