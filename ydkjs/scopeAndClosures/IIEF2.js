var a = 2;

( IIFE = (def) => {
	def(window);
})( def =( global) => {
	var a = 3;
	console.log(a);
	console.log(global.a);
});