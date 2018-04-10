function isUrlRelative (urlString) {
	var pat = /^https?:\/\//i;
	if (pat.test(urlString))
		return false;
	return true;
}

function appendBaseUrl (urlString) {
	var pat = /^www?./i;
	if (pat.test(urlString)) {
		return "https://" + urlString;
	} else {
		urlString = window.location.origin + "/" + urlString;
	}
	return urlString;
}

var getFavicon = function(){
	var favicon = undefined;
	var nodeList = document.getElementsByTagName("link");
	for (var i = 0; i < nodeList.length; i++)
	{
		if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
		{
			favicon = nodeList[i].getAttribute("href");
		}
	}
	console.log(favicon);

	//remove slashes at the beginning
	while(favicon.indexOf("\/") == 0) {
		favicon = favicon.substr(1, favicon.length);
	}

	if( isUrlRelative(favicon) ) {
		favicon = appendBaseUrl(favicon);
	}
	console.log(favicon);

	return favicon;
}


//get selected text and pass it to background
var selected_text = window.getSelection().toString();
chrome.runtime.sendMessage({action: "text-selection", text: selected_text})

//get page url
var current_page_url = window.location.href.toString();
chrome.runtime.sendMessage({action: "current-page-url", text: current_page_url})

//get page title
var current_page_title = document.title.toString();
chrome.runtime.sendMessage({action: "current-page-title", text: current_page_title})

//get fav icon url
var fav_icon_url = getFavicon();
chrome.runtime.sendMessage({action: "fav-icon-url", text: fav_icon_url})


//get all llinks
var links = [];
var a = document.querySelectorAll('a');
for(var i=0; i<2; i++) {
	links.push(a[i].getAttribute('href'));
}
//chrome.runtime.sendMessage({action: 'get-links', links: links});