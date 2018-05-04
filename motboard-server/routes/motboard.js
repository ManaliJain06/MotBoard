var express = require('express');
var router = express.Router();
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/motboard";

// router.post('/', function (req, res, next) {
//    // console.log("asdasdasdasdasd");
//     try {
//         mongo.connect(mongoURL, function () {
//             var coll = mongo.collection('motboards');
//             coll.find({username: req.username}, function (err, motboards) {
//                 if (motboards) {
//                     res.status(200).send(motboard);
//                 }
//                 else {
//                     res.status(400).send(null);
//                 }
//             });
//         });
//     }
//     catch (e) {
//         console.log(e);
//     }
// });
//
// module.exports = router;

exports.getPublicMotboard = function(req,res){
    try {
        mongo.connect(mongoURL, function () {
            let coll = mongo.collection('users');

            coll.aggregate([
                {$match: {'motboards.access': 'public'}},
                {$project: {
                    motboards: {$filter: {
                        input: '$motboards',
                        as: 'motboard',
                        cond: {$eq: ['$$motboard.access', 'public']}
                    }},
                    _id: 0
                }}
            ],function(err,result){
                let response = {
                    boards: []
                };
                result.map(data =>{
                    var motboards = data.motboards;
                    motboards.map(board =>{
                          response.boards.push(board);
                    });
                });
                res.status(201).json({'boards':response.boards});
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}


// coll.findOneAndUpdate({ "username" : req.body.userdata.username},
//     {$set:{"firstname": req.body.userdata.firstname ,
//         "lastname": req.body.userdata.lastname,
//         "password": req.body.userdata.password,
//         "profileImage": req.body.userdata.profileImage}}, function (err, result) {
//         console.log("result is", result);
//         if (result.ok > 0) {
//             res.status(201).json({'user':req.body.userdata,'msg':"update success"});
//         }
//         else {
//             res.status(400).send("Error occured");
//         }
//     });