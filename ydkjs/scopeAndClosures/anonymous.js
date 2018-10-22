setTimeout( () => {
	console.log("I have waited 1 second!!!");
}, 1000);

// the same named function 

setTimeout( timeOutHandler = () => {
	console.log("I also waited half a secong for you!!!");
}, 500);