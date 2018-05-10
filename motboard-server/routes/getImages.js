var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/getImages', function (req, res, next) {
    // console.log("asdasdasdasdasd");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');
            console.log(req.body.motBoardName);
            coll.aggregate({$unwind: '$motboards'},
                {$match: {'motboards.name':req.body.motBoardName}},
                function (err, data) {
                    if (data) {
                        console.log(data[0].motboards.images);
                        res.status(200).send(data[0].motboards.images);
                    }
                    else {
                        console.log("insied error");
                        res.status(400).send("login failed");
                    }
                })
        })
    }

    catch (e) {
        console.log(e);
    }
});

module.exports = router;
