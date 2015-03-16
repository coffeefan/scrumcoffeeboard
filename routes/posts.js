var express = require('express');
var router = express.Router(),
    blog = require('../models/blog');

router.param('post_id', function(req, res, next, id) {
    req.blog_post = blog.find(id);
    next();
});

router.param('delete', function(req, res, next, id) {
    blog.remove(id);
    next();
});

router.route('/').
    all(function(req, res, next) {
        var posts = blog.getAllEntries();
        res.render('posts/index', { posts: posts });
    });

router.route('/new').
    get(function(req, res, next) {
        res.render('posts/new', {});
    });

router.route('/api').
    get(function(req, res, next) {
        var posts = blog.getAllEntries();
        res.json(posts);
    });

router.route('/new').
    post(function(req, res, next) {
        var data=req.body;
        data.publishedAt=new Date();
        blog.add(req.body);
        res.render('posts/new', {status:"Erfolgreich eingetragen"});
    });


router.route('/:post_id').
    get(function(req, res, next) {
        res.render('posts/show', { post: req.blog_post });
    });

router.route('/:post_id/delete').
    get(function(req, res, next) {
        blog.remove(req.blog_post.id);
        res.redirect("/posts/");
    });



module.exports = router;
