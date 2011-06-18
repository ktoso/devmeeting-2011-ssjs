
mixin = function(dst, src) {
	if( !src || typeof src !== 'object' )
		return dst;
	
	for( var i in src ) {
		src.hasOwnProperty(i) && ( dst[i] = src[i] );
	}
		
	return dst;
};

Function.prototype.bind || (Function.prototype.bind = function(ctx){
	var fn = this, 
		args = Array.prototype.slice.call(arguments,1);
		
	return function() {
		return fn.apply( ctx, args.concat(Array.prototype.slice.call(arguments)) );
	};
});

agosp = this.agosp || {};

agosp.out = function(txt) {
	if( this.console && console.log )
		console.log(txt);
	else if( !this.document && this.print )
		print( txt );
	else if( this.alert )
		alert( txt );
};