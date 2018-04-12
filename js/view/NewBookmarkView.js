function NewBookmarkView( model ) {
	this._bookmarkModel = model;

	this.addBookmarkBtnClicked = new Event(this);

	var _this = this;

	//register for bookmark model events
	this._bookmarkModel.bookmarkAdded.attach( function() {
		console.log("Item added !!!");
		_this.switchViews();
	});
	this._bookmarkModel.bookmarkDeleted.attach( function( bookmark ) {
		_this.showList(bookmark);
	});

	document.getElementById("add_bookmark_btn").onclick = function() {
		_this.addBookmarkBtnClicked.notify();
	}

	document.getElementById("switch_view_btn").onclick = function() {
		_this.switchViews();
	}

	document.getElementById("clear_all_btn").onclick = function() {
		_this._bookmarkModel.clearAllBookmarks( _this.showList );
	}
}

NewBookmarkView.prototype.refreshList = function() {
	var listView = document.getElementById("list_bookmark_view");

	if(listView.style.display == "block") {
		var bookmarks = this._bookmarkModel.getAllBookmarks();
		this.showList(bookmarks);
	}
}

NewBookmarkView.prototype.switchViews = function() {
	var addView  = document.getElementById("add_bookmark_view"); 
	var listView = document.getElementById("list_bookmark_view");

	addView.style.display = (addView.style.display == "none" ? "block" : "none");
	listView.style.display = (listView.style.display == "none" ? "block" : "none");

	this.refreshList();
}

NewBookmarkView.prototype.showList = function( bookmarks ) {
	if(bookmarks != null && !isEmpty(bookmarks)) {
		var dom = getBookmarkDOM(bookmarks);
		document.getElementById("list_bookmark_view").innerHTML = dom;
	} else {
		document.getElementById("list_bookmark_view").innerHTML = "";
	}
}