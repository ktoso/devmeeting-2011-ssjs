
agosp = this.agosp || {};
agosp.ui = agosp.ui || {};

agosp.ui.console = (function(){
	
	var cons = {
		log: function(txt) {
				jQuery("#console").append( "<br/>"+txt );
			}
	};
	
	agosp.out = cons.log.bind(cons);
	
	agosp.events.add( document, agosp.events.APPLICATION_STARTED, function(){ agosp.out( "Console module is ready" ); });
	
	return cons;
	
})();
