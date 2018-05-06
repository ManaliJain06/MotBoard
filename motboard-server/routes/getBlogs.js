var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.get('/getBlogs', function (req, res, next) {
    console.log("get Blogs");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('blogs');
            coll.findOne({'name':'admin'}, function (err, blogs) {
                if (blogs) {
              console.log(blogs.blogs);
              res.status(200).send(blogs.blogs);
                }
                else {
                    res.status(400).send(null);
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
