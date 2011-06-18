
agosp = this.agosp || {};
agosp.ui = agosp.ui || {};

agosp.ui.fileList = (function(){
	
	var _addLi = function(name) {
			var li = document.createElement( "li" );
			li.appendChild( document.createTextNode(name) );
			jQuery("#files").append( li );
			jQuery(li).click( fl.select.bind(fl,name) );
		};
	
	var fl = {
			load: function(listener) {
					this.clear();
				},
				
			clear: function() {
					jQuery("#files li").remove();
				},
				
			select: function(name) {
				}
		};
	
	agosp.events.add( document, agosp.events.APPLICATION_STARTED, function(){ 
			agosp.out( "FileList module is ready" );
		});	
	
	return fl;
	
})();