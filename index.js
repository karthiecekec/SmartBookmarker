chrome.runtime.sendMessage({popupOpen: true});


$( document ).ready( function() {
	var bookmarks 	= readBookmarksFromStorage();
	var model 		= new BookmarkModel ( bookmarks );
	var view 		= new NewBookmarkView (model);
	var controller 	= new NewBookmarkController(model, view);
});