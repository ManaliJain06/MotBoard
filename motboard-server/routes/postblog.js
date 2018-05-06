var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/postblog', function (req, res, next) {
    console.log("post blog");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('blogs');
            console.log(req.body.temp);
            coll.update({'name':'admin'},{$push:{blogs:req.body.temp}});
            res.status(200).send(null);

        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
