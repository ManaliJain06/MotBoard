var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";
var multer = require('multer');
var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.session.username + '-' + Date.now() + file.originalname)
    }
});
var upload2 = multer({storage: storage2});

//var type2 = upload2.array('uploads');
//below array is the images which we got
var type2 = "insertedimage";

/* GET home page. */
router.post('/insertImage', function (req, res, next) {
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');
            //changing filenames to the name which we created.
            var motBoardName = req.body.motboard;
            coll.findOne({username: req.body.username}, function (err, user) {
                if (user) {
                    var motboards = user.motboards;
                    for (var i = 0; i < motboards.length; i++) {
                        if (motboards[i].name === motBoardName) {
                            var te = {};
                            te.url = "in public folder";
                            te.description = "inserted Image";
                            motboards[i].images.push(te);
                        }
                    }
                    coll.update({username: req.body.username, "motboards.name": motBoardName}, {
                        $set: {
                            'motboards': motboards
                        }
                    });
                    res.status(200).send("Inside Image");
                } else {
                    res.status(400).send("No output");
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
});


module.exports = router;