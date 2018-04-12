var STORAGE_NAME = "smart_bookmarks";

function readBookmarksFromStorage( callback ) {
	// Read it using the storage API
	chrome.storage.sync.get("smart_bookmarks", function(items) {
		//return items via callback function
		callback( items["smart_bookmarks"] );
	});
}

function writeBookmarksToStorage( bookmarks, callback ) {

	//console.log( "Write to " + STORAGE_NAME + " : " + bookmarks["General"][0].getBookmarkTitle());
	chrome.storage.sync.set({"smart_bookmarks": bookmarks}, function() {
		console.log("Writing bookmarks to storage successful !!!")
		callback();
    });
}

function getBookmarkDOM ( bookmarks ) {
	var dom = "";

	for(var category in bookmarks) {
		dom += "<div class=\"panel panel-default\"> " +
                    "<div class=\"panel-heading\">" +
                        "<h4 class=\"panel-title\">" +
                            "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">" + category + "</a>" +
                        "</h4>" + 
                    "</div>" +
                    "<div class=\"panel-collapse collapse in\" style=\"border-radius:0px; font-size:10px;\">";
	
		for(var i=0; i<bookmarks[category].length; i++) {
			var bookmark = bookmarks[category][i];
			dom += "<a href=\"#\" class=\"list-group-item\"><img src=\"" + bookmark.favIconUrl + "\" style=\"width:16px;height:16px;margin-right:5px\">" + bookmark.bookmarkTitle + "</a>";
		}

		dom += "</div></div>";
	}
	return dom;
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}