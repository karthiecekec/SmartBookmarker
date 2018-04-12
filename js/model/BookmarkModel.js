/***********************
BookmarkModel Class
***********************/

function BookmarkModel( bookmarkItems ) {
	if (bookmarkItems == null || bookmarkItems == undefined) {
		console.log("Bookmark items are null !!!");
		bookmarkItems = {};
	}

	this._bookmarkItems = bookmarkItems;

	this.bookmarkAdded = new Event(this);
	this.bookmarkDeleted = new Event(this);
}

BookmarkModel.prototype.addBookmark = function( folder, bookmark ) {
	var added = false;

	for(var bookmarkFolder in this._bookmarkItems ) {
		console.log("Category : " + bookmarkFolder);
		if (bookmarkFolder == folder) {
			if(this._bookmarkItems[folder] == null || this._bookmarkItems[folder] == undefined)
				this._bookmarkItems[folder] = [];
			
			this._bookmarkItems[folder].push(bookmark);
			added = true;
			break;
		}
	}
 
	if(!added) {
		console.log("initialize _bookmarkItems with " + bookmark.getBookmarkTitle());
		this._bookmarkItems[folder] = [ bookmark ];
	}

	//console.log(this._bookmarkItems);

	this.bookmarkAdded.notify ( {bookmark: bookmark} );
	writeBookmarksToStorage( this._bookmarkItems, function writeCallback() {
		console.log("writeCallback !!! ");
	});
}

BookmarkModel.prototype.getBookmarks = function ( folder, callback ) {
	readBookmarksFromStorage( function (bookmarkItems) {
		console.log(folder + " ==> " + bookmarkItems[folder]);
		if (bookmarkItems != null) {
			console.log("[Bookmark Model] return items...")
			callback(bookmarkItems[folder]);
		} else {
			console.log("[Bookmark Model] return null...")
			callback(null);
		}
	});
}

BookmarkModel.prototype.getAllBookmarks = function () {
	return this._bookmarkItems;
}

BookmarkModel.prototype.clearAllBookmarks = function ( callback ) {
	this._bookmarkItems = {};
	writeBookmarksToStorage( this._bookmarkItems, function writeCallback() {
		console.log("Clears all bookmarks !!!");
		callback (null);
	});

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