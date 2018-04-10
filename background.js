'use strict';

function getView() {
	var views = chrome.extension.getViews({
	 	type: "popup"
	});

	return views[0];
}

function selectText(containerid) {
	var view = getView();
	var document = view.document;
	var window = view.window;
	
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	if(message.popupOpen) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			// execute script on current tab only
			tabs.forEach(function(tab) {
				chrome.tabs.executeScript(tab.id, {file: 'page_action.js'}, function(){}); 
			});
		});
	}
});

//get current tab link
chrome.runtime.onMessage.addListener(function (message, sender) {
    if( message && message.action == 'current-url') {
        console.log(message.links);
        chrome.runtime.sendMessage(message);
    }
});

//get selected text
chrome.runtime.onMessage.addListener(function (message, sender) {
	var views = chrome.extension.getViews({
		type: "popup"
	});
		
	if ( message && message.action == 'text-selection') {
		//get popup view and update selected text
	 	for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('selected_text').innerHTML = message.text;
		}
	}

	if ( message && message.action == 'current-page-url') {
		//get popup view and update current page url
		for (var i = 0; i < views.length; i++) {
			views[i].document.getElementById('current_tab_url').innerHTML = message.text;
		}
	}
	if ( message && message.action == 'current-page-title') {
		//get popup view and update current page title
	 	for (var i = 0; i < views.length; i++) {
			var bookmark_title = views[i].document.getElementById('add_bookmark_title');
			bookmark_title.value = message.text;
			selectText("add_bookmark_title");
			views[i].focus(bookmark_title);
		}
	}
	if ( message && message.action == 'fav-icon-url') {
		//get popup view and update fav icon url
	 	for (var i = 0; i < views.length; i++) {
			var add_bookmark_title = views[i].document.getElementById('add_bookmark_title');
			add_bookmark_title.style.backgroundImage = "url(" + message.text + ")";
		}
	}

});