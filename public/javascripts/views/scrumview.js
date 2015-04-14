var app = app || {};

app.ScrumView= Backbone.View.extend({
    el: 'body',


    events: {
        'click #addscrumtask': 'createItem',
        'keypress #new-todo': 'createItemOnEnter'
    },

    initialize: function () {
        this.ScrumTaskList =  new app.ScrumTaskList();

        this.listenTo(this.ScrumTaskList, 'add', this.addItem);
        this.listenTo(this.ScrumTaskList, 'all', this.render);
        this.ScrumTaskList.fetch();

    },

    addItem: function (item) {
        var ScrumTaskView = new app.ScrumTaskView(item);
        $("#list-"+item.attributes.status).append(ScrumTaskView.render().el);
    },

    addAll: function () {
        console.log('addAll');
        this.ScrumTaskList.each(this.addItem, this);
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
        console.log("hello");
        if (!this.input.val()) return;
        this.ScrumTaskList.create({ title: this.input.val() });
        this.input.val('');
    },
    updateSort: function(event, model, position) {
        console.log("updatesort");
    },

    showOpen: function() {
        console.log('get open Items');
        this.ScrumTaskList.open();
        console.log('nr. of items:' + this.todos.length);
        // this.todos.fetch();
        //this.trigger('reload');
    },
    showCompleted: function() {
        console.log('get completed Items');
        this.ScrumTaskList.completed();
        console.log('nr. of items:' + this.todos.length);
        // this.todos.fetch();
        //this.trigger('reload');
    },
    showAll: function() {
        console.log('get all Items');
        this.ScrumTaskList.all();
        console.log('nr. of items:' + this.todos.length);
        //this.todos.fetch();
        //this.trigger('reload');
    }
});


