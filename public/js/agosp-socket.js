
agosp = this.agosp || {};

agosp.socket = (function(){
	
	var socket = null
		;
	
	var _handleMessage = function(msg) {

		};
		
	var obj = {
		
		CHAT_MESSAGE: "chat",
		FILE_EDIT: "edit",
		
		connect: function(address) {
			},
			
		send: function(type, message) {

			}
	};
	
	return obj;
	
})();

jQuery( function(){ agosp.out( "WebSocket module is ready" ); } );
