var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var createmotboard=require('./routes/createmotboard');
var makePublic=require('./routes/makePublic');
var motboard = require('./routes/motboard');
var routes = require('./routes/index');
var login = require('./routes/login');
var users = require('./routes/users');
let getImages=require('./routes/getImages');
var updateUserProfile=require('./routes/updateUserProfile');
var insertImage=require('./routes/insertImage');
var mongoSessionURL = "mongodb://localhost:27017/sessions";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo")(expressSessions);
var getuserboards=require('./routes/getusermotboards');

var app = express();

var corsPrefetch=require('cors-prefetch-middleware');
var imagesUpload=require('images-upload-middleware');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSessions({
    secret: "CMPE280_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 6 * 1000,
    store: new mongoStore({
        url: mongoSessionURL
    })
}));


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(passport.initialize());
app.use('/', routes);
app.use('/users', users);
app.post('/logout', function (req, res) {
    console.log(req.session.user);
    req.session.destroy();
    console.log('Session Destroyed');
    res.status(200).send();
});
bodyParser = require('body-parser').json();
// app.use('/getmotboard', motboard);
app.post('/login', login);
app.post('/signup', users);
app.post('/motboard',createmotboard);
app.post('/makePublic',makePublic);
app.post('/insertImage',insertImage);
app.post('/getImages',getImages);
app.post('/updateUserProfilePic',updateUserProfile.updateUserProfilePic);
app.post('/updateUserData',updateUserProfile.updateUserInfo);
app.post('/signout', updateUserProfile.signout);
app.get('/getPublicMotboard', motboard.getPublicMotboard);
app.post('/postLikes', motboard.postLikes);
app.post('/addPublicBoardToPrivate', motboard.addPublicBoardToPrivate);
app.get('/getuserboards',getuserboards);
module.exports = app;
