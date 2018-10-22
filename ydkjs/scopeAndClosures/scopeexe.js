function doSomething(a){
	function dosomethingElse(a){
		return a - 1;
	}

	var b;
	b = a + dosomethingElse(a * 2);
	console.log(b * 3);
}
doSomething(2);