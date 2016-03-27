define("checkStorage", [], function() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		console.error('LocalStorage is not supported.');
		return false;
	}
});