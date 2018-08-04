//sample worker
self.postMessage('READY');


sleep(2000);

self.postMessage('COMPLETED');


function sleep(miliseconds) {
	let startingTime = new Date().getTime();
	let stopTime = startingTime + miliseconds;

	while (stopTime >= new Date().getTime()){}
}