$(function() {
  var socket = new io.Socket('http://localhost:1337/');

  socket.connect();

  socket.on('connect', function(){
	
  });

  socket.on('message', function(data){
//	case(data.type) {
		alert(data)
//	}	
  });

  socket.on('disconnect', function(){
	
  });
});
