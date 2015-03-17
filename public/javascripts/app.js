var app = app || {};
var ENTER_KEY = 13;
$(function() {
  todos = new app.TodoList();

  todos.fetch();
  var t = todos.create({});
  t.set('title', 'via collection but in the model')
  t.save()
});
