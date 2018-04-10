function Bookmark () {
	this.bookmarkId = 0;
	this.bookmarkContent = "";
	this.bookmarkTitle = "";
	this.pageUrl = "";
	this.favIconUrl = "";
	this.contentType = "text";
	this.timeAdded = "";
}

Bookmark.prototype.getBookmarkId = function( ) {
	return this.bookmarkId;
}
Bookmark.prototype.setBookmarkId = function( id ) {
	this.bookmarkId = id;
}

Bookmark.prototype.getBookmarkContent = function( ) {
	return this.bookmarkContent;
}
Bookmark.prototype.setBookmarkContent = function( content ) {
	this.bookmarkContent = content;
}

Bookmark.prototype.getBookmarkTitle = function( ) {
	return this.bookmarkTitle;
}
Bookmark.prototype.setBookmarkTitle = function( title ) {
	this.bookmarkTitle = title;
}

Bookmark.prototype.getPageUrl = function( ) {
	return this.pageUrl;
}
Bookmark.prototype.setPageUrl = function( url ) {
	this.pageUrl = url;
}

Bookmark.prototype.getFavIconUrl = function( ) {
	return this.favIconUrl;
}
Bookmark.prototype.setFavIconUrl = function( url ) {
	this.favIconUrl = url;
}

Bookmark.prototype.getContentType = function( ) {
	return this.contentType;
}
Bookmark.prototype.setContentType = function( type ) {
	this.contentType = type;
}

Bookmark.prototype.getTimeAdded = function( ) {
	return this.timeAdded;
}
Bookmark.prototype.setTimeAdded = function( time ) {
	this.timeAdded = time;
}