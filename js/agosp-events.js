this.agosp = this.agosp || {};

agosp.events = (function(){
	
	var _events = {};
	
	var _utils = {
			
			exist: function(element, type, listener){
					if( !_events[type] )
						return false;

					return _events[type].some( function(ev){
							return ev.element === element && ev.listener === listener;
						});
				},
				
			find: function(element, type) {
					if( !_events[type] )
						return [];
						
					return _events[type].filter( function(ev){
							return ev.element && ev.element === element;
						});
				}
		};
	
	return {
		
			register: function(type) {
				if( !_events.hasOwnProperty(type) ) {
					_events[ type ] = [];
					return true;
				}
				return false;
			},
		
			add: function(element, type, listener) {
				if( _utils.exist(element, type, listener) )
					return false;
				_events[type].push( { element: element, listener: listener } );
				return true; 
			},
			
			once: function(element, type, listener) {
				var that = this;
				this.add( element, type, function(data) {
						listener(data);
						that.remove(element, type, arguments.callee);
					});
			},
			
			remove: function(element, type, listener) {
				_utils.find( element, type ).forEach( function(list){
						if( list.listener === listener )
							delete _events[type][ _events[type].indexOf(list) ];
					} );
			},
			
			trigger: function(element, type, data) {
				element = element || document.activeElement;
				_utils.find( element, type ).forEach( function(ev){
						ev.listener( data );	
					} );
			}
		};
	
})();
