var express = require('express');
var router = express.Router(),
    scrumboard = require('../models/scrumboard');

router.route('/').
    get(function(req, res, next) {
        var scrumtasks = scrumboard.getAllEntries();
        res.json(scrumtasks);
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

module.exports = router;
