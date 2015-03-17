var app = app || {};

app.ScrumView= Backbone.View.extend({
    el: $('body'),


    events: {
        'click #add-item': 'createItem',
        'keypress #new-todo': 'createItemOnEnter'
    },

    initialize: function () {
        this.ScrumTaskList =  new app.ScrumTaskList();

        //this.input = $('#new-todo');
        //this.list = $('#todo-list');

        //this.listenTo(this.todos, 'add', this.addItem);
        //this.listenTo(this.todos, 'all', this.render);
        // this.listenTo(this.todos, 'reset', this.reload);
        //this.listenTo(this.todos, 'reload', this.reload);
        //scrumtasks = new app.ScrumTaskList();
        this.ScrumTaskList.fetch();
        var t = this.ScrumTaskList.create({});
        t.set('title', 'via collection but in the model');
        t.save();


    },

    addItem: function (item) {
        var todoView = new TodoView({ model: item });
        this.list.append(todoView.render().el);
    },

    addAll: function () {
        console.log('addAll');
        this.todos.each(this.addItem, this);
    },

    reload: function() {
        console.log('reloading');
        this.list.empty(); // clear the DOM element
        this.addAll();
    },

    createItemOnEnter: function (e) {
        if (e.keyCode != 13) return;
        this.createItem();
    },
    createItem: function () {
        if (!this.input.val()) return;
        this.todos.create({ title: this.input.val() });
        this.input.val('');
    },

    showOpen: function() {
        console.log('get open Items');
        this.todos.open();
        console.log('nr. of items:' + this.todos.length);
        // this.todos.fetch();
        //this.trigger('reload');
    },
    showCompleted: function() {
        console.log('get completed Items');
        this.todos.completed();
        console.log('nr. of items:' + this.todos.length);
        // this.todos.fetch();
        //this.trigger('reload');
    },
    showAll: function() {
        console.log('get all Items');
        this.todos.all();
        console.log('nr. of items:' + this.todos.length);
        //this.todos.fetch();
        //this.trigger('reload');
    }
});
