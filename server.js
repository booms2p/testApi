var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    User = require('./api/models/testModel.js'),
    ElderUser = require('./api/models/elderUserModel.js'),
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/TestDB');
mongoose.connect('mongodb://localhost/ElderHomeCareDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For cross domain request
var originsWhitelist = [
    '*'
];
var corsOptions = {
    origin: function(origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}

app.use(cors());
// ==================================

// var routes = require('./api/routes/testRoutes.js');
var routes = require('./api/routes/elderUserRoutes.js');
routes(app);

app.use(function(req, res, next) {
    // cors()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept, Authorization, Auth, Token, Access-Token, Access_Token, AccessToken, Code');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.status(404).send({ url: req.originalUrl + ' not found' })
        // cors(corsOptions);
    next()
});

// app.use(function(req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found' })
//     cors(corsOptions)
// });

app.listen(port);

console.log('testApi RESTful API server started on: ' + port);