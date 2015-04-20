describe("TodoList", function() {
    var spyCard;

    beforeEach(function () {


    });
    it("is defined in app namespace", function() {
        expect(app.ScrumTask).toBeDefined();
    });

    it("is a collection of ScrumTask models, save called", function() {
        var spy = spyOn(Backbone.Model.prototype, 'save');
        expect(new app.ScrumTaskList().create({}) instanceof app.ScrumTask).toBe(true)
        expect(spy).toHaveBeenCalled();
    });

    it("ScrumTask delete call REST API, by delete", function() {
        var spy = spyOn(Backbone.Model.prototype, 'destroy');
        var scrumtask=  new app.ScrumTask();
        var scrumTaskView=new app.ScrumTaskView(scrumtask);
        scrumTaskView.parent={};
        scrumTaskView.parent.initialize=function(){};
        scrumTaskView.deleteSelf();
        expect(spy).toHaveBeenCalled();
    });

    it("ScrumTask put(save) call REST API by change", function() {
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

    it("done() in List done", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is done task";
        scrumtask.attributes.status=3;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-3");

    });

    it("todo() in List todo", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is done task";
        scrumtask.attributes.status=1;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-1");

    });

    it("inprogress() in List inprogress", function() {
        var scrumtask=  new app.ScrumTask();
        scrumtask.attributes.title="is done task";
        scrumtask.attributes.status=2;
        expect(app.ScrumView.addItem(scrumtask)).toBe("#list-2");

    });




});


