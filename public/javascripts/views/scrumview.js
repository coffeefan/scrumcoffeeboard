var app = app || {};

app.ScrumView= Backbone.View.extend({
    el: 'body',


    events: {
        'click .addscrumtask': 'createItem',
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
        this.ScrumTaskList.create({
            title:  $('#new .title').val(),
            description:  $('#new .description').val(),
            responsible:  $('#new .responsible').val(),
            cost:  $('#new .cost').val(),
            status:1});
    }
});


