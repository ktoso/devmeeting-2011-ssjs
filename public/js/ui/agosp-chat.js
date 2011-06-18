
agosp = this.agosp || {};
agosp.ui = agosp.ui || {};

agosp.ui.chat = (function(){
	
	var chat = {
			add: function(msg) {
					jQuery("#chat").append( "<li><span class='user'>"+msg.user+"</span>"+msg.message+"</li>" );
					jQuery("#chat").attr({ scrollTop: jQuery("#chat").attr("scrollHeight") });
				},
				
			send: function() {

				}
		};
	
	agosp.events.add( document, agosp.events.CHAT_MSG_RECEIVED, chat.add.bind(chat) );
	
	agosp.events.add( document, agosp.events.APPLICATION_STARTED, function(){ 
			agosp.out( "Chat module is ready" ); 
			jQuery("#sendmsg").click( chat.send.bind(chat) );
		});
	
	return chat;
	
})();
