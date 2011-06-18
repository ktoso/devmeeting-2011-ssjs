agosp = this.agosp || {};
agosp.ui = agosp.ui || {};

agosp.ui.editor = (function(){
	
	var _initCodeMirror = function(id) {
			return CodeMirror.fromTextArea(id, {
					height: "280px",
					parserfile: ["tokenizejavascript.js", "parsejavascript.js"],
					stylesheet: "css/codemirror/jscolors.css",
					path: "./lib/codemirror/",
					textWrapping: false
				});
		};
		
	var _createEditor = function(textAreaId){
			var codemirror = _initCodeMirror(textAreaId);
			return {
					code: function(c) {
							//return;
							if(!c)
								return codemirror.getCode();
							return codemirror.setCode(c);
						}
				};
		};
	
	var editor = {
			//code: _createEditor( 'code' )
		};
	
	agosp.events.add( document, agosp.events.APPLICATION_STARTED, function(){ 
		agosp.out( "Editor module is ready" );
		agosp.ui.editor.code = _createEditor( 'code' );
		agosp.ui.editor.test = _createEditor( 'test' );
	});	
	
	return editor;
})();