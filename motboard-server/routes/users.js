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
                    res.status(401).send("User already exist");
                } else {
                    var motboards = [];
                    coll.insert({
                        username: req.body.userdata.username,
                        password: req.body.userdata.password,
                        firstname: req.body.userdata.firstname,
                        lastname: req.body.userdata.lastname,
                        profileImage: req.body.userdata.profileImage,
                        motboards: motboards
                    }, function (err, newuser) {
                        if (newuser) {
                            req.session.user=req.body.userdata.username;
                            res.status(201).json({'user':newuser.ops[0],'msg':"sigunup success"});
                        }
                        else {
                            res.status(400).send("Error occured");
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
