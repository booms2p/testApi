'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('elderUsers');

exports.get_elder_user = function(req, res) {
    User.find({}, function(err, userData) {
        if (err)
            res.send(err);
        else
            res.json({ status: 'successful', data: userData });
    });
};

exports.create_elder_user = function(req, res) {
    var new_user_data = new User(req.body);
    new_user_data.save(function(err, userData) {
        if (err)
            res.send(err);
        else
            res.json({ status: 'successful', data: userData });
    });
};

exports.find_elder_user = function(req, res) {
    User.find({ 'idNumber': req.params.idNumber }, function(err, user) {
        if (err)
            res.send(err);
        else if (user.length === 0)
            res.json({ status: 'unsuccesful', message: 'Can not find user from inNumber ' + req.params.idNumber });
        else
            res.json({ status: 'succesful', data: user });
    });
};

exports.update_elder_user = function(req, res) {
    User.findOneAndUpdate({ idNumber: req.params.idNumber }, req.body, { new: true }, function(err, result) {
        if (err)
            res.send(err);
        else if (result == null)
            res.json({ status: 'unsuccesful', message: 'Can not find user from inNumber ' + req.params.idNumber + ' for update.' });
        else
            res.json({ status: 'succesful', data: [result] });
    });
};

exports.delete_elder_user = function(req, res) {
    User.findOneAndRemove({ idNumber: req.params.idNumber }, function(err, result) {
        if (err)
            res.send(err);
        else if (!result)
            res.json({ status: 'unsuccesful', message: 'Can not find user from inNumber ' + req.params.idNumber + ' for delete.' });
        else
            res.json({ status: 'succesful', message: 'User ' + req.params.idNumber + ' successfully deleted' });
    });
};