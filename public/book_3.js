
var Book = Backbone.Model.extend();
var book = new Book({title: 'Javascript, the good parts'});

var BookView = Backbone.View.extend({
  el: $('#book-list'),

  template: _.template($('#book-template').html()),

  render : function() {
    this.el.innerHTML = this.template(this.model.toJSON());
    return this;
  }
});

var bookView = new BookView({
  model: book
});

bookView.render();
