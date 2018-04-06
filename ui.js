function receiveText (resultsArray) {
	 console.log("received the array..");
}

/*
chrome.browserAction.onClicked.addListener( function(tab) {
	chrome.tabs.executeScript( tab.id, {
		code: 'window.getSelection().toString();'
	}, function(selection) {
		console.log("Selected Text : " + selection[0]);
		 $("#selected_text").text = selection[0];
	});
});
*/

/*
chrome.browserAction.onClicked.addListener( function(tab) {

	chrome.browserAction.setPopup ({
 		popup: "popup.html"
 	});

	var selected_text = window.getSelection().toString();
	chrome.runtime.sendMessage({action: "text-selection", text: selected_text})
});
*/


//selected text
var selected_text = window.getSelection().toString();
chrome.runtime.sendMessage({action: "text-selection", text: selected_text})

//2 llinks
var links = [];
var a = document.querySelectorAll('a');
for(var i=0; i<2; i++) {
	links.push(a[i].getAttribute('href'));
}
chrome.runtime.sendMessage({action: 'get-links', links: links});

//$("#selected_text").text = "I am here !!";