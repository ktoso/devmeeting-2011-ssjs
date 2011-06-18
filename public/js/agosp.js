agosp = this.agosp || {};

(function(){

	var customEvents = {
			APPLICATION_STARTED: "app-started",
			CHAT_MSG_RECEIVED: "chat-msg-received",
			CHAT_MSG_SENT: "chat-msg-sent",
			FILE_LIST_LOADED: "file-list-loaded"
		};
	
	for( var i in customEvents ) {
		customEvents.hasOwnProperty(i) && agosp.events.register( customEvents[i] );
	}
	
	mixin( agosp.events, customEvents );
	mixin( agosp, {
		SERVER: "http://192.168.0.2:8080/"
	});
	
	jQuery( function(){
			jQuery('.collapsible-pane .header').click(function() {
					jQuery(this).next().toggle();
					return false;
				});		
		
			agosp.events.trigger( document, agosp.events.APPLICATION_STARTED );
			//agosp.socket.connect( "192.168.0.7:8124" );
			agosp.out( "Agosp started" );
		} );

})();