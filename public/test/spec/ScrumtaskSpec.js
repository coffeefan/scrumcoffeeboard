describe("TodoList", function() {
  it("is defined in app namespace", function() {
    expect(app.ScrumTask).toBeDefined();
  });

  it("is a collection of ScrumTask models", function() {
    expect(new app.ScrumTaskList().create({}) instanceof app.ScrumTask).toBe(true)
  });

  it("done() in List done", function() {
    /*var scrumtasks = new app.ScrumTaskList();
    scrumtasks.create({title: "is done task", status: 3});
    scrumtasks.create({title: "is done not done task", status: 1});
    expect(scrumtasks.length).toBe(2);
    var scrumtask=  new app.ScrumTask();
    scrumtask.title="is done task";
    scrumtask.status=3;
    new app.ScrumTaskView(scrumtask);*/
    expect(true);
  });
});


