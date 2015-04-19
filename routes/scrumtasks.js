var express = require('express');
var router = express.Router(),
    scrumboard = require('../models/scrumboard');



router.param('scrum_taskid', function(req, res, next, id) {
    req.srcumtask = scrumboard.find(id);
    next();
});

router.route('/').
    post(function(req, res, next) {
        var data=req.body;
        data.publishedAt=new Date();
        scrumboard.add(req.body);
        var response={
            isok:true,
            errormessage:''
        };
        res.json(response);
    });

router.route('/').
    get(function(req, res, next) {
        var posts = scrumboard.getAllEntries();
        res.json(posts);
    });

router.route('/:scrum_taskid').
    put(function(req, res, next) {
        var data=req.body;
        scrumboard.edit(data);
        var response={
            isok:true,
            errormessage:''
        };
        res.json(response);
    });

router.route('/:scrum_taskid').
    delete(function(req, res, next) {
        console.log(req.srcumtask.id+"aa");
        scrumboard.remove(req.srcumtask.id);
        var response={
            isok:true,
            errormessage:''
        };
        res.json(response);
    });
module.exports = router;
