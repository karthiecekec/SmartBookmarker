function isUrlRelative (urlString) {
	var pat = /^https?:\/\//i;
	if (pat.test(urlString))
		return false;
	return true;
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

	if( isUrlRelative(favicon) ) {
		favicon = window.location.origin + "/" + favicon;
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