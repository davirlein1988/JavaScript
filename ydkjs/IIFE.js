( function hello(){ console.log("Hello!!!")})();

var
 a = 42;
(function IIFE(){
  var a = 10;
  console.log( a );
  })();
console.log( a ); 


// more IIFE

var  x = (function IIFE(){
  return 42;
  })();
x;          
