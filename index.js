chrome.runtime.sendMessage({popupOpen: true});


$( document ).ready( function() {
	var model 	= new BookmarkModel ( [] );
	var view 	= new NewBookmarkView (model);
	var controller 	= new NewBookmarkController(model, view);
});