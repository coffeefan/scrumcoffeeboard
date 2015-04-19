var app = app || {};

// The collection of todos is backed by *localStorage*
app.ScrumTaskList = Backbone.Collection.extend({
    model: app.ScrumTask,
    url: '/scrumtasks'
});

// Create global collection of **Todos**.
app.ScrumTasks = new app.ScrumTaskList();
