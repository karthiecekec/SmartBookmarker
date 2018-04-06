'use strict';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	if(message.popupOpen) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			// execute script on current tab only
			tabs.forEach(function(tab) {
				console.log("tab id: " + tab.id)
				chrome.tabs.executeScript(tab.id, {file: 'ui.js'}, function(){}); 
			});
		});
	}
});

//get all links
chrome.runtime.onMessage.addListener(function (message, sender) {
    if( message && message.action == 'get-links') {
        console.log(message.links);
        chrome.runtime.sendMessage(message);
    }
});

//get selected text
chrome.runtime.onMessage.addListener(function (message, sender) {
    if( message && message.action == 'text-selection') {
        console.log(message.text);

        	//get popup view and update selected text
 	var views = chrome.extension.getViews({
	 	type: "popup"
	});
	for (var i = 0; i < views.length; i++) {
	    views[i].document.getElementById('selected_text').innerHTML = message.text;
	}
    }
});