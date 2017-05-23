'use strict';
module.exports = function(app) {
    var userList = require('../controllers/testController');

    app.route('/get-user')
        .get(userList.get_user)
        .post(userList.create_user);
};