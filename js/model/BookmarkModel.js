/***********************
BookmarkModel Class
***********************/

function BookmarkModel( bookmarkItems ) {
	if (bookmarkItems == null || bookmarkItems == undefined)
		bookmarkItems = {};

	this._bookmarkItems = bookmarkItems;

	this.bookmarkAdded = new Event(this);
	this.bookmarkDeleted = new Event(this);
}

BookmarkModel.prototype.addBookmark = function( folder, bookmark ) {
	var added = false;

	for ( bookmarkFolder in this._bookmarkItems ) {
		if (bookmarkFolder == folder) {
			if(this._bookmarkItems[folder] == null || this._bookmarkItems[folder] == undefined)
				this._bookmarkItems[folder] = [];
			
			this._bookmarkItems[folder].push(bookmark);
			added = true;
			break;
		}
	}

	if(!added)
		this._bookmarkItems[folder] = [ bookmark ];

	this.bookmarkAdded.notify ( {bookmark: bookmark} );
	writeBookmarksToStorage( this._bookmarkItems );
}

BookmarkModel.prototype.getBookmarks = function ( folder ) {
	for ( bookmarkFolder in this._bookmarkItems ) {
		if (bookmarkFolder == folder) {
			return this._bookmarkItems[folder];
		}
	}

	return null;
}

BookmarkModel.prototype.getAllBookmarks = function () {
	return this._bookmarkItems;
}

BookmarkModel.prototype.removeBookmark = function ( folder, title ) {
	for ( bookmarkFolder in this._bookmarkItems ) {
		if (bookmarkFolder == folder) {
			for ( index=0; index<this._bookmarkItems[folder].length; index++ ) {
				var bookmark = this._bookmarkItems[folder][index];
				if ( bookmark.getBookmarkTitle() == title ) {
					this._bookmarkItems[folder].splice(index, 1);
					this.bookmarkDeleted.notify ( { bookmarkTitle: title } );
					return;
				}
			}
		}
	}

	console.log("Bookmark {title:" + title + "} not found !!!");
}