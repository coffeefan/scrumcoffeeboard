var app = app || {};

app.ScrumView= Backbone.View.extend({
    el: 'body',


    events: {
        'click .addscrumtask': 'createItem',
        'keypress #new-todo': 'createItemOnEnter'
    },

    initialize: function () {
        $(".sortable-list").html("");
        this.ScrumTaskList =  new app.ScrumTaskList();

        this.listenTo(this.ScrumTaskList, 'add', this.addItem);
        this.listenTo(this.ScrumTaskList, 'all', this.render);
        this.ScrumTaskList.fetch();

    },

    addItem: function (item) {
        var ScrumTaskView = new app.ScrumTaskView(item);
        $("#list-"+item.attributes.status).append(ScrumTaskView.render().el);
        return "#list-"+item.attributes.status;
    },

    addAll: function () {
        console.log('addAll');
        this.ScrumTaskList.each(this.addItem, this);
    },

    reload: function() {
        console.log('reloading');
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
            cost:  $('#new .sbcost').val(),
            status:1});

        this.initialize();

    }
});


