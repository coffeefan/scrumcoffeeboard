var BookView = Backbone.View.extend({
  tagName : "div",
  className : "book",

  render : function() {
    this.el.innerHTML = this.model.get('title');
    return this;
  }
});

var Book = Backbone.Model.extend();

var book = new Book({title: 'Javascript, the good parts'});

var bookView = new BookView({
  model: book
});

var renderedBookElement = bookView.render().el;

console.log(renderedBookElement);
console.log(renderedBookElement.innerHTML);

$('#book-list').append(renderedBookElement);