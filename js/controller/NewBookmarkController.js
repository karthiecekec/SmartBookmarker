function NewBookmarkController( model, view ) {
	this._bookmarkModel = model;
	this._bookmarkView = view;

	var _this = this;

	//register for bookmark view events
	this._bookmarkView.addBookmarkBtnClicked.attach( function() {
		console.log("Add bookmark item to the list !!!");
		var bookmark = new Bookmark();
		_this._bookmarkModel.addBookmark(bookmark);
	});
}