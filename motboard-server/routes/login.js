var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";
router.post('/login', function (req, res, next) {
    try {
        mongo.connect(mongoURL, function () {
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('users');
            coll.findOne({username: req.body.userdata.username, password: req.body.userdata.password}, function (err, user) {
                if (user) {
                    //session initialiaze
                    req.session.user=req.body.userdata.username;
                    // res.status(200).send();
                    res.status(200).json({'user':user,'msg':"login success"});
                } else {
                    res.status(400).send("login failure");
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
