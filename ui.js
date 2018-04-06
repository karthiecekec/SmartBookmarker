function receiveText (resultsArray) {
	 console.log("received the array..");
}

chrome.browserAction.onClicked.addListener( function(tab) {
	console.log('Injecting content script(s)');

	chrome.tabs.executeScript( tab.id, {
		code: 'window.getSelection().toString();'
	}, function(selection) {
		console.log("received the array..");
	});
});

	chrome.browserAction.setPopup({
            	tabId: tab.id,
            	popup: 'index.html'
        	});

