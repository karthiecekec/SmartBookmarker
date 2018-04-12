chrome.runtime.sendMessage({popupOpen: true});


$( document ).ready( function() {
	/*
	chrome.storage.sync.set({"smart_bookmarks": null}, function() {
		console.log("reset !!!");
	});
	*/

	readBookmarksFromStorage( init );
});

function init ( bookmarks ) {
	console.log(bookmarks);

	var model 		= new BookmarkModel ( bookmarks );
	var view 		= new NewBookmarkView (model);
	var controller 	= new NewBookmarkController(model, view);

	view.showList(bookmarks);
}