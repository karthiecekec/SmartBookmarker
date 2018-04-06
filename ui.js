//get selected text and pass it to background
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