var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/signup', function (req, res, next) {
    //console.log("sanjay");
    //console.log(req.body.userdata);
    //console.log("sanjay");
    try {
        mongo.connect(mongoURL, function () {
            //  console.log("sanjay");
            // console.log(req.body.username);
            var coll = mongo.collection('users');
            coll.findOne({username: req.body.userdata.username}, function (err, user) {
                if (user) {
                    res.send("401", "User already exist");
                } else {
                    var motboards = [];
                    coll.insert({
                        username: req.body.userdata.username,
                        password: req.body.userdata.password,
                        firstname: req.body.userdata.firstname,
                        lastname: req.body.userdata.lastname,
                        motboards: motboards
                    }, function (err, newuser) {
                        if (newuser) {
                            res.status(200).send("user saved successfully");
                        }
                        else {
                            res.status(401).send("Failed Inserting User");
                        }
                    })
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
