var Book = Backbone.Model.extend();
var book = new Book({title: 'Javascript, the good parts'});

var BookView = Backbone.View.extend({
  el: $('#book-list'),

  render : function() {
    this.el.innerHTML = "<div id='book'>" + this.model.get('title') + "</div>";
    return this;
  }
});

var bookView = new BookView({
  model: book
});

bookView.render();
