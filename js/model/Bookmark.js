function Bookmark () {
	this.bookmarkId = 0;
	this.pageContent = "";
	this.pageTitle = "";
	this.pageUrl = "";
	this.favIconUrl = "";
	this.contentType = "text";
}

Bookmark.prototype.getBookmarkId = function( ) {
	return this.bookmarkId;
}
Bookmark.prototype.setBookmarkId = function( id ) {
	this.bookmarkId = id;
}

Bookmark.prototype.getPageContent = function( ) {
	return this.pageContent;
}
Bookmark.prototype.setPageContent = function( content ) {
	this.pageContent = content;
}

Bookmark.prototype.getPageTitle = function( ) {
	return this.pageTitle;
}
Bookmark.prototype.setPageTitle = function( title ) {
	this.pageTitle = title;
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
Bookmark.prototype.getFavIconUrl = function( url ) {
	this.favIconUrl = url;
}

Bookmark.prototype.getContentType = function( ) {
	return this.contentType;
}
Bookmark.prototype.setContentType = function( type ) {
	this.setContentType = type;
}