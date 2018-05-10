var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/', function (req, res, next) {
    // console.log("asdasdasdasdasd");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');

            coll.aggregate({$unwind: '$motboards'},
                    {$sort: {'motboards.likes': -1}
                }, {$limit: 5}, function (err, motboards) {
                    if (motboards) {
                        var popular = [];
                        for (let i = 0; i < motboards.length; i++) {
                            let temp = {};
                            temp.description =motboards[i].motboards.name;
                             temp.likes = motboards[i].motboards.likes;
                             let temp1 = motboards[i].motboards.images[0];
                            let p=temp1.length-2;
                            temp.url = temp1[Math.floor((Math.random() * p) +1)].url;
                            popular.push(temp);
                        }
                        res.status(200).send(popular);
                    }
                    else {
                        res.status(400).send("login failed");
                    }
                })
        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
