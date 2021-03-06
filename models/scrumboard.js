// Scrumboard Model


var Scrumboard = {
    tasks: [
        {
            id: '1',
            title: 'PSD erstellen',
            description:'Anhand der Notizen soll eine Photoshop-Vorlage erstellt werden',
            status: 1,
            cost:3,
            responsible:'Chris'
        },
        {
            id: '2',
            title: 'CSS umsetzen',
            description:'Das PSD soll in ein responsives HTML/CSS umgesetzt werden',
            status: 2,
            cost:5,
            responsible:'Martin'
        },
        {
            id: '3',
            title: 'ERD/DB-Design',
            description:'Der Shop soll als relationales DB-Design umgesetzt werden',
            status: 1,
            cost:8,
            responsible:'Claude'
        }
    ],
    last_id: 3,

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

    edit: function (data) {
        var idLives=false;
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == data.id) {
                this.tasks[i]=data;
                idLives=true;
            }
        }

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

exports.edit = function (data) {
    return Scrumboard.edit(data);
};



