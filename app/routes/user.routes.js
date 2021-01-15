'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const UserController = require('../controllers/UserController')(db);

    app.get('/users', UserController.getAll);

    app.post('/deleteUser', UserController.delete);
}