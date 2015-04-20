var app = app || {};

app.ScrumTaskView= Backbone.View.extend({
    tagName: 'li',

    template: _.template(app.scrumtaskTemplateString),

    events: {
        'drop' : 'drop',
        'click .loeschen': 'deleteSelf',
        "change input.title": "updateTitle",
        "change textarea.description": "updateDescription",
        "change input.responsible": "updateResponsible",
        "change .sbcost": "updateCost"

    },

    drop: function(event, listid) {
        console.log("drop"+this.scrumtask.get("id")+", Status"+listid);
        this.scrumtask.set({status: listid});
        this.scrumtask.save();
    },

    initialize: function (scrumtask) {

        this.scrumtask=scrumtask;
    },
    render: function () {
        this.$el.html(this.template(this.scrumtask.toJSON()));
        return this;
    },

    updateTitle: function(args){
       console.log("updateTitle"+this.scrumtask.get("id"));
       this.scrumtask.set({title:  args.target.value});
       this.scrumtask.save();
    },
    updateDescription: function(args){
        console.log("updateDescription"+this.scrumtask.get("id"));

        this.scrumtask.set({description:  $(args.target).val()});
        this.scrumtask.save();
    },
    updateResponsible: function(args){
        console.log("updateResponsible"+this.scrumtask.get("id"));
        this.scrumtask.set({responsible:  args.target.value});
        this.scrumtask.save();
    },
    updateCost: function(args){
        console.log("updateCost"+this.scrumtask.get("id"));
        this.scrumtask.set({cost:  args.target.value});
        this.scrumtask.save();
    },
    deleteSelf: function(){
        this.scrumtask.destroy();
        app.ScrumView.initialize();
    }


});