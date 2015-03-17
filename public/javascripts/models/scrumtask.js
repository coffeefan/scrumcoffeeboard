var app = app || {};

app.ScrumTask = Backbone.Model.extend({
  // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
        title: '',
        description:'',
        status:0,
        cost:1,
        name:''
    }
});
