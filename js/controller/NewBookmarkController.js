function NewBookmarkController( model, view ) {
	this._bookmarkModel = model;
	this._bookmarkView = view;

	var _this = this;

	//register for bookmark view events
	this._bookmarkView.addBookmarkBtnClicked.attach( function() {
		console.log("Add bookmark item to the list !!!");

		var bookmark = new Bookmark();
		//bookmark.setBookmarkId( 1 );
		bookmark.setBookmarkContent( document.getElementById('selected_text').value );
		bookmark.setBookmarkTitle( document.getElementById('add_bookmark_title').value );
		bookmark.setPageUrl( document.getElementById('current_tab_url').innerHTML );
		bookmark.setFavIconUrl( document.getElementById('add_bookmark_title').style.backgroundImage.slice(4, -1).replace(/"/g, "") );
		bookmark.setContentType( "text" );
		bookmark.setTimeAdded( "09 Apr 2018 17:42:10" );

		var folder = "General";

		_this._bookmarkModel.addBookmark( folder, bookmark );
	});
}