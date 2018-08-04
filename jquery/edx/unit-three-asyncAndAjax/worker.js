self.addEventListener('message', function (e) {
	var message = e.data;
	self.postMessage(e.data + ' - Processed!');
});
//Architecture implemented for events like onReady
self.postMessage('READY');
