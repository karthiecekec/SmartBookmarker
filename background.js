// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/*
chrome.runtime.onInstalled.addListener( function() {
	chrome.storage.sync.set({color: '#3aa757'}, function() {
 		console.log("The color is green.");
	});
});
*/

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

chrome.browserAction.onClicked.addListener( function(tab) {
	chrome.tabs.executeScript(tab.id, {file: 'ui.js'}, function(){}); 

	/*
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// execute script on current tab only

		tabs.forEach(function(tab) {
			console.log("tab id: " + tab.id)
			chrome.tabs.executeScript(tab.id, {file: 'ui.js'}, function(){}); 
		});
	});
	*/
});

chrome.runtime.onMessage.addListener(function (message, sender) {
    if( message && message.action == 'get-links') {
        console.log(message.links);
    }
});

chrome.runtime.onMessage.addListener(function (message, sender) {
    if( message && message.action == 'text-selection') {
        console.log(message.text);
         $("#selected_text").text = message.text;
    }
    chrome.browserAction.setPopup ({
 	popup: "index.html"
    });
});