var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/', function (req, res, next) {
   // console.log("asdasdasdasdasd");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('motboards');
            coll.find({username: req.username}, function (err, motboards) {
                if (motboards) {
                    res.status(200).send(motboard);
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
