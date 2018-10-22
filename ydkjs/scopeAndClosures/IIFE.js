var a = 2;
(IIFE = (global) => {
	var a = 3;
	console.log(a);
	console.log(global.a);
})(window);

console.log(a);