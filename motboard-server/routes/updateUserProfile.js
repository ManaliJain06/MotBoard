var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";
var multer = require('multer');

var fileURL = "";
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "/../public/images"));
        },
        filename: function (req, file, cb) {
            let filename = Date.now() + file.originalname;
            fileURL='http://localhost:3300/images/'+filename;
            cb(null, filename);
        }
    }
);

const upload = multer({ storage: storage }).single('file');

exports.updateUserProfilePic = function (req,res){
    console.log("payload is jhjkgjkhjkhjhk", req.body);
    upload(req, res, function (err) {
        if(err){
            let msg = "Error occured";
            let jsonResponse = {
                "result": "error",
                "message": msg
            };
            res.status(500).json({jsonResponse});
        }else{
            // let msg = "saved successfully";
            // let jsonResponse = {
            //     "statusCode": 201,
            //     "result": "Success",
            //     "message": msg
            // };
            // res.send(jsonResponse);
            res.status(201).json({fileURL : fileURL});
        }
    });
};

exports.updateUserInfo = function(req,res){
    try {
        mongo.connect(mongoURL, function () {
            let coll = mongo.collection('users');
            // coll.findOne({username: req.body.userdata.username}, function (err, user) {
            //     if (user) {
            //         res.status(401).send("User already exist");
            //     } else {
            //         var motboards = [];
            //         coll.insert({
            //             username: req.body.userdata.username,
            //             password: req.body.userdata.password,
            //             firstname: req.body.userdata.firstname,
            //             lastname: req.body.userdata.lastname,
            //             motboards: motboards
            //         }, function (err, newuser) {
            //             if (newuser) {
            //                 res.status(201).json({'user':newuser,'msg':"sigunup success"});
            //             }
            //             else {
            //                 res.status(400).send("Error occured");
            //             }
            //         })
            //     }
            // });


            coll.findOneAndUpdate({ "username" : req.body.userdata.username},
                {$set:{"firstname": req.body.userdata.firstname ,
                        "lastname": req.body.userdata.lastname,
                        "password": req.body.userdata.password,
                        "profileURL": req.body.userdata.profileImage}}, function (err, result) {
                    console.log("result is", result);
                    // if (err) {
                    //     let msg = "Error Occured";
                    //     jsonResponse = {
                    //         "statusCode": 500,
                    //         "result": "Error",
                    //         "message": msg
                    //     };
                    //     res.send(jsonResponse);
                    // } else {
                    //     if(result.result.nModified > 0){
                    //         var msg = "Saved Successfully";
                    //         jsonResponse = {
                    //             "statusCode": 201,
                    //             "result": "Success",
                    //             "message" : msg
                    //         };
                    //         res.send(jsonResponse);
                    //     } else {
                    //         var msg = "Error Occured";
                    //         jsonResponse = {
                    //             "statusCode": 400,
                    //             "result": "Error",
                    //             "message": msg
                    //         };
                    //         res.send(jsonResponse);
                    //     }
                    // }
                    if (result.ok > 0) {
                        res.status(201).json({'user':req.body.userdata,'msg':"update success"});
                    }
                    else {
                        res.status(400).send("Error occured");
                    }
                });
        });
    }
    catch (e) {
        console.log(e);
    }
}
