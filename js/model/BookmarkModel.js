function BookmarkModel( bookmarkItems ) {
	this._bookmarkItems = bookmarkItems;

	this.bookmarkAdded = new Event(this);
	this.bookmarkDeleted = new Event(this);
}

BookmarkModel.prototype.addBookmark = function( bookmark ) {
	this._bookmarkItems.push(bookmark);
	this.bookmarkAdded.notify ( {bookmark: bookmark} );
}

BookmarkModel.prototype.getBookmark = function ( bookmarkId ) {
	for ( index=0; index<this._bookmarkItems.length; index++ ) {
		var bookmark = this._bookmarkItems[index];
		if ( bookmark.getBookmarkId() == bookmarkId ) {
			return bookmark;
		}
	}

	return null;
}

BookmarkModel.prototype.getAllBookmarks = function () {
	return this._bookmarkItems;
}

BookmarkModel.prototype.removeBookmark = function ( bookmarkId ) {
	for ( index=0; index<this._bookmarkItems.length; index++ ) {
		var bookmark = this._bookmarkItems[index];
		if ( bookmark.getBookmarkId() == bookmarkId ) {
			this._bookmarkItems.splice(index, 1);
			this.bookmarkDeleted.notify ( {bookmarkId: bookmarkId} );
			return;
		}
	}

	console.log("Bookmark {id:" + bookmarkId + "} not found !!!");
}