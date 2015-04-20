describe("Scrumboard", function() {
    var spyCard;

    beforeEach(function () {


    });
    it("is defined in app namespace", function() {
        expect(app.ScrumTask).toBeDefined();
    });

    it("is a collection of ScrumTask models, save called", function() {
        var spy = spyOn(Backbone.Model.prototype, 'save');
        expect(new app.ScrumTaskList().create({}) instanceof app.ScrumTask).toBe(true)

    });

    it("new ScrumTask-Object creates a POST REST API call", function() {
        var spy = spyOn(Backbone.Model.prototype, 'save');
        new app.ScrumTaskList().create({});
        expect(spy).toHaveBeenCalled();

    });

    it("delete-Method makes a Delete REST API call", function() {
        var spy = spyOn(Backbone.Model.prototype, 'destroy');
        var scrumtask=  new app.ScrumTask();
        var scrumTaskView=new app.ScrumTaskView(scrumtask);
        scrumTaskView.parent={};
        scrumTaskView.parent.initialize=function(){};
        scrumTaskView.deleteSelf();
        expect(spy).toHaveBeenCalled();
    });

    it("Title changes makes Put/Save REST API call", function() {
        var spy = spyOn(Backbone.Model.prototype, 'save');
        var scrumtask=  new app.ScrumTask();
        var scrumTaskView=new app.ScrumTaskView(scrumtask);
        scrumTaskView.parent={};
        scrumTaskView.parent.initialize=function(){};
        var args={}
        args.target={}
        args.target.value="new Title"
        scrumTaskView.updateTitle(args);
        expect(spy).toHaveBeenCalled();
    });

    it("ScrumTask Status 'done' in List done", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is done task";
        scrumtask.attributes.status=3;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-3");

    });

    it("ScrumTask Status 'create' in List in create", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is create task";
        scrumtask.attributes.status=1;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-1");

    });

    it("ScrumTask Status 'in progress' in List in progress", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is in progress task";
        scrumtask.attributes.status=2;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-2");

    });




});


