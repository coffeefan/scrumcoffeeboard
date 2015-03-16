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

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  var TodoList = Backbone.View.extend({
    el: $('#todo-list'),

    render: function () {
      console.log('called render');
    },

    events: {
       'click #add-item': 'createItem',
       'keypress #new-todo': 'createItemOnEnter'
    },

    initialize: function () {
      this.delegateEvents(this.events);
      this.input = $('#new-todo');

      this.listenTo(todos, 'add', this.addItem);
      this.listenTo(todos, 'reset', this.addAll);
      this.listenTo(todos, 'all', this.render);

      todos.fetch({reset: true});
    },

    addItem: function (item) {
      var todoView = new TodoView({ model: item });
      this.$el.append(todoView.render().el);
    },

    addAll: function() {
      todos.each(this.addItem, this);
    },

    createItemOnEnter: function(e) {
      if (e.keyCode != 13) return;
      this.createItem();
    },
    createItem: function() {
      if(!this.input.val()) return;
      todos.create({ title: this.input.val() });
      this.input.val('');
    }
  });

  var todoList = new TodoList;

});
