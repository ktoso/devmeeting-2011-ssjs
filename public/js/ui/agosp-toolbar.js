agosp = this.agosp || {};
agosp.ui = agosp.ui || {};

(function(){
	
	agosp.events.add( document, agosp.events.APPLICATION_STARTED, function(){ 
		
		agosp.out( "Toolbar is ready" ); 
		jQuery("#save-btn").click( function(){
				agosp.xdajax.post( agosp.SERVER+"source", { 
						"name": jQuery("#files li.selected").text(),
						"source": jQuery("#code").val(),
						"test": jQuery("#test").val()
					} );
			} );
		
	});	
	
})();