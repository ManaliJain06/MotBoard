var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.get('/getuserboards', function (req, res, next) {

    console.log("got the data for motboards");
    console.log(req.session.user);

    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');
            coll.findOne({username: req.session.user}, {motboards: 1}, function (err, boards) {
                if (boards) {
                  var private=  boards.motboards.filter((board) => board.access == 'private');
                   var public=  boards.motboards.filter((board) => board.access == 'public')
                    var data=[];
                   data.push(public);
                   data.push(private);
                   console.log(data);
                    res.status(201).json({
                       data:data
                    })
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
