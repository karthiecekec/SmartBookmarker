function NewBookmarkView( model ) {
	this._bookmarkModel = model;

	this.addBookmarkBtnClicked = new Event(this);

	//register for bookmark model events
	this._bookmarkModel.bookmarkAdded.attach( function() {
		console.log("Item added !!!");
	});

	var _this = this;
	document.getElementById("add_bookmark_btn").onclick = function() {
		console.log("button clicked..")
		_this.addBookmarkBtnClicked.notify();
	}
}