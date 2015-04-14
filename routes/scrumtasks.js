var express = require('express');
var router = express.Router(),
    scrumboard = require('../models/scrumboard');



router.param('post_id', function(req, res, next, id) {
    var data=req.body;
    scrumboard.edit(data);

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
    });
module.exports = router;
