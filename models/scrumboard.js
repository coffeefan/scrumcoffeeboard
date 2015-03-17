// Scrumboard Model


var Scrumboard = {
    tasks: [
        {
            id: '1',
            title: '',
            description:'',
            status: 1,
            cost:1,
            name:''
        }
    ],
    last_id: 1,

    getNextId: function () {
        this.last_id += 1;
        return this.last_id;
    },

    clone: function (data) {
        // JavaScript doesn't have a real clone function
        // This is good enough for simple, data-only objects
        return JSON.parse(JSON.stringify(data));
    },

    add: function (data) {
        // poor mans 'dup' (ruby), otherwise we will be modifying the original object
        var data = this.clone(data);
        var id = this.getNextId();
        data.id = id;
        this.tasks.push(data);
        return data;
    },

    find: function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                return this.tasks[i];
            }
        }
        return void 0;
    },

    remove: function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                var p = this.tasks[i];
                this.tasks.splice(i, 1);
                return p; // remove element and return it
            }

        }
        return void 0;
    },

    allTasks: function () {
        return this.tasks;
    },

    clearAllEntries: function () {
        this.tasks = [];
        this.last_id = 0;
    }
};

exports.Tasks = Scrumboard;

exports.getAllEntries = function () {
    return Scrumboard.allTasks();
};

exports.clearAllEntries = function () {
    return Scrumboard.clearAllEntries();
};



exports.create = function (data) {
    return Scrumboard.add(data);

};

exports.find = function (id) {
    return Scrumboard.find(id);
};

exports.remove = function (id) {
    return Scrumboard.remove(id);
}

exports.add = function (data) {
    return Scrumboard.add(data);
};


