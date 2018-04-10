var STORAGE_NAME = "smart_bookmarks";

function readBookmarksFromStorage() {
	// Read it using the storage API
	chrome.storage.sync.get("smart_bookmarks", function(items) {
		console.log( items );
		return items;
	});
}

function writeBookmarksToStorage( bookmarks ) {
	chrome.storage.sync.set({"smart_bookmarks": bookmarks}, function() {
		console.log("Writing bookmarks to storage successful !!!")
    });
}