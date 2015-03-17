var app = app || {};

// The collection of todos is backed by *localStorage*
app.ScrumTaskList = Backbone.Collection.extend({
    model: app.ScrumTask,
    url: '/scrumtasks',


    // Filter down the list of all todo items that are finished.
    completed: function() {
        return this.filter(function( todo ) {
            return ScrumTask.get('completed');
        });
    },
    // Filter down the list to only todo items that are still not finished.
    remaining: function() {
        return this.without.apply( this, this.completed() );
    },

    // Keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
        if ( !this.length ) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function( todo ) { return todo.get('order'); }
});

// Create global collection of **Todos**.
app.ScrumTasks = new app.ScrumTaskList();