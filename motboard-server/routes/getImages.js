var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

router.post('/getImages', function (req, res, next) {
    // console.log("asdasdasdasdasd");
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');

            coll.findOne({username: 'sanjay'}, function (err, user) {
                if (user) {
                    for (let i = 0; i < user.motboards.length; i++) {
                        if (user.motboards[i].name === req.body.motBoardName) {
                            var images = user.motboards[i].images;
                            res.status(201).json({
                                images: images[0]
                            })
                        }
                    }
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
