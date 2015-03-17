var express = require('express');
var router = express.Router(),
    scrumboard = require('../models/scrumboard');

router.route('/').
    get(function(req, res, next) {
        var scrumtasks = scrumboard.getAllEntries();
        res.json(scrumtasks);
    });


module.exports = router;
