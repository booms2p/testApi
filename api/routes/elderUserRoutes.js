'use strict';
module.exports = function(app) {
    var elderUserList = require('../controllers/elderUserController');

    app.route('/get-elder-user').get(elderUserList.get_elder_user);

    app.route('/add-elder-user').post(elderUserList.create_elder_user);

    app.route('/update_elder_user/:idNumber').put(elderUserList.update_elder_user);

    app.route('/elderUser/:idNumber')
        .get(elderUserList.find_elder_user)
        // .put(elderUserList.update_a_task)
        .delete(elderUserList.delete_elder_user);
};