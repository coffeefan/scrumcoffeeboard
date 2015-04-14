var app = app || {};

app.ScrumTask = Backbone.Model.extend({
  // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
        id: null,
        title: '',
        description:'',
        status: 1,
        cost:1,
        responsible:''
    }
});
