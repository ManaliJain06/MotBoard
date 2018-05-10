var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";
var multer = require('multer');
var path = require('path');
var glob = require('glob');
var imagesArray = [];
var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "/../public/images"))
    },
    filename: function (req, file, cb) {
        var temp = {};
        temp.description = "";
        temp.url = 'http://localhost:3300/images/' + file.originalname;
        imagesArray.push(temp);
        cb(null, file.originalname);
    }
});
var upload2 = multer({storage: storage2});
var type2 = upload2.array('mypic', 10);

//below array is the images which we got
/* GET home page. */
router.post('/motboard', type2, function (req, res, next) {
    try {
        mongo.connect(mongoURL, function () {
            var coll = mongo.collection('users');
            //changing filenames to the name which we created.
            //var get the motboard name while inserting the all images

            coll.findOne({username: req.session.user}, function (err, user) {
                var temp;
                var images;
                if (user) {
                    //  console.log(req.body.motBoardName);
                    console.log(req.session.motBoardName);
                    for (var i = 0; i < user.motboards.length; i++) {
                        if (user.motboards[i].name == req.session.motBoardName) {
                            if (user.motboards[i].images.length === 0)
                                user.motboards[i].images.push(imagesArray);
                            else {
                                for (var k = 0; k < imagesArray.length; k++)
                                    user.motboards[i].images[0].push(imagesArray[k]);
                                temp = user.motboards;
                                images = user.motboards[i].images;
                                break;
                            }
                            images = user.motboards[i].images;
                            temp = user.motboards;
                        }
                    }
                    imagesArray = [];
                    coll.update({username: req.session.user}, {
                        $set: {
                            'motboards': temp
                        }
                    });
                    res.status(201).json({
                        images: images[0]
                    })
                }
                else {
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