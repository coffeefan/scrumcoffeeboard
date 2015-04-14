var app = app || {};

app.ScrumTaskView= Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#item-template').html()),

    events: {
        "click .toggle": "toggleDone",
        "dblclick .view": "edit",
        "keypress .edit": "updateOnEnter",
        "blur .edit": "close",
        'drop' : 'drop',
        'click #addscrumtask': 'createItem'
    },

    drop: function(event, index,listid) {
        console.log("saleti2"+index+this.model.attributes.title);
        this.model.set({status: listid});
        this.model.save();


    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.model.bind("change",function(){
            console.log("olé");
        })
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        //this.$el.toggleClass('done', this.model.get('done'));
        this.input = this.$('.edit');
        return this;
    },
    toggleDone: function () {
        console.log('toggle model');
        this.model.toggle();
    },
    edit: function () {
        this.$el.addClass("editing");
        this.input.focus();
    },
    close: function () {
        var value = this.input.val();
        if (!value) {
            this.clear();
        } else {
            this.model.save({title: value});
            this.$el.removeClass("editing");
        }
    },
    updateOnEnter: function (e) {
        if (e.keyCode == 13) this.close();
    },
    createItem: function(){
        console.log("alia");
    }
});