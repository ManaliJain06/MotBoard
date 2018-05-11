var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";
router.post('/makePublic', function (req, res, next) {

    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');
            //coll.update({name})
            console.log("motbaord name");
            var motboardName=req.body.motBoardName;
            coll.update({"motboards.name":motboardName}, {
                $set: {
                    'motboards.$.access': "public"
                }
            });


            res.status(200).send("made public");
        });
    }
    catch (e) {
        console.log(e);
    }
});

module.exports = router;
