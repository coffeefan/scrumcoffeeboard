
var Book = Backbone.Model.extend();
var book1 = new Book({title: 'Javascript, the good parts'});
var book2 = new Book({title: 'Eloquent JavaScript'});

var BookCollection = Backbone.Collection.extend({
  model: Book
});

var books = new BookCollection([book1, book2]);

var BookView = Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#book-template').html()),

  render : function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var BookList = Backbone.View.extend({
  el: $('#book-list'),

  render: function() {
    books.each(this.addBook, this);
  },

  addBook: function(book) {
    var bookView = new BookView({ model: book });
    this.$el.append(bookView.render().el);
  }
});

var bookList = new BookList;

bookList.render();
