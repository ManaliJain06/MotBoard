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
                let seen = [];
                let response = {
                    boards: []
                };
                result.map(data =>{
                    var motboards = data.motboards;
                    motboards.map(board =>{
                        if (seen.indexOf(board.name) === -1){
                            response.boards.push(board);
                            seen.push(board.name);
                        }

                    });
                });
                // let seen = [];
                // let uniqueBoards = [];
                // response.boards.filter(function(x) {
                //     if (seen.indexOf(x.name) === -1){
                //         uniqueBoards.push(x);
                //         seen.push(x.name);
                //     }
                // }, );
                res.status(201).json({'boards':response.boards});
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}

exports.postLikes = function(req,res){
    try {
        mongo.connect(mongoURL, function () {
            let coll = mongo.collection('users');

            // coll.find({"motboards.name" : req.body.name}).forEach(function(plan) {
            //     plan.motboards.forEach(function(board) {
            //         if(board.name === req.body.name) {
            //             board.likes = req.body.likes;
            //         }
            //     });
            //     coll.save(plan);
            // });

            coll.find({"motboards.name": req.body.name}).toArray(function (err, result) {

                result.forEach(function (obj) {
                    obj.motboards.forEach(function (board) {
                        if (board.name === req.body.name) {
                            board.likes = req.body.likes;
                        }
                    });
                })

                //
                // result[0].motboards.forEach(function(board) {
                //     if(board.name === req.body.name) {
                //         board.likes = req.body.likes;
                //     }
                // });
                result.forEach(function (doc) {
                    coll.save(doc);
                });

                coll.aggregate([
                    {$match: {'motboards.access': 'public'}},
                    {
                        $project: {
                            motboards: {
                                $filter: {
                                    input: '$motboards',
                                    as: 'motboard',
                                    cond: {$eq: ['$$motboard.access', 'public']}
                                }
                            },
                            _id: 0
                        }
                    }
                ], function (err, result) {
                    let seen = [];
                    let response = {
                        boards: []
                    };
                    result.map(data => {
                        var motboards = data.motboards;
                        motboards.map(board => {
                            if (seen.indexOf(board.name) === -1) {
                                response.boards.push(board);
                                seen.push(board.name);
                            }

                        });
                    });
                    res.status(201).json({'boards': response.boards});
                });

                // coll.insertMany(result, function(err, savedResult){
                //     if(savedResult.result.nModified>0){
                //             coll.aggregate([
                //                 {$match: {'motboards.access': 'public'}},
                //                 {$project: {
                //                     motboards: {$filter: {
                //                         input: '$motboards',
                //                         as: 'motboard',
                //                         cond: {$eq: ['$$motboard.access', 'public']}
                //                     }},
                //                     _id: 0
                //                 }}
                //             ],function(err,result){
                //                 let seen = [];
                //                 let response = {
                //                     boards: []
                //                 };
                //                 result.map(data =>{
                //                     var motboards = data.motboards;
                //                     motboards.map(board =>{
                //                         if (seen.indexOf(board.name) === -1){
                //                             response.boards.push(board);
                //                             seen.push(board.name);
                //                         }
                //
                //                     });
                //                 });
                //                 res.status(201).json({'boards':response.boards});
                //             });
                //         }
                //         // res.status(201).json();
                //     });
                // });
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}

exports.addPublicBoardToPrivate = function(req,res,next){
    try {
        mongo.connect(mongoURL, function () {
            let coll = mongo.collection('users');

            let board={
                name: req.body.board.name,
                access: req.body.board.access,
                likes: req.body.board.likes,
                images: req.body.board.images,
            }

            coll.update({ username: req.body.user.username },
                {$push: { motboards: board }}, function(err, result){
                    if(result.result.nModified>0){
                        coll.find({username: req.body.user.username}).toArray(function (err, user){
                            if (user) {
                                res.status(200).json({'user':user});
                            } else {
                                res.status(400).send();
                            }
                        });
                    }else{
                        res.status(400).send();
                    }
                });
        });
    }
    catch (e) {
        console.log(e);
    }
}


exports.savePrivateMotboardName = function(req, res){
    try {
        mongo.connect(mongoURL, function () {
            let coll = mongo.collection('users');

            let board = {
                name: req.body.motboardboardname,
                access: "private",
                likes: '',
                images: [[]]
            }

            coll.update({username: req.body.user.username},
                {$push: {motboards: board}}, function (err, result) {
                    if (result.result.nModified > 0) {
                        req.session.motBoardName = req.body.motBoardName;
                        res.status(200).json({message: "inserted"});
                    } else {
                        res.status(400).send();
                    }
                });
        });
    }
    catch (e) {
        console.log(e);
    }
}