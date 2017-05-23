'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('users');

exports.get_user = function(req, res) {
    User.find({}, function(err, userData) {
        if (err)
            res.send(err);
        res.json(userData);
    });
};

exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, userData) {
        if (err)
            res.send(err);
        res.json(userData);
    });
};