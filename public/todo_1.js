$(function () {


// Model

  var Todo = Backbone.Model.extend({
    defaults: {
      title: '',
      done: false
    }

  });

  var TodosCollection = Backbone.Collection.extend({
    model: Todo,
    url: '/todos'
  });

  var todos = new TodosCollection();

  var TodoView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('#item-template').html()),

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var TodoList = Backbone.View.extend({
    el: $('#todo-list'),

    render: function () {

    },

    initialize: function () {
      this.listenTo(todos, 'reset', this.addAll);
      todos.fetch({reset: true});
    },

    addItem: function (item) {
      var todoView = new TodoView({ model: item });
      this.$el.append(todoView.render().el);
    },

    addAll: function() {
      todos.each(this.addItem, this);
    }
  });

  var todoList = new TodoList;

});
