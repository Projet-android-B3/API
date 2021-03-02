'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TokenMiddleware = require('../middlewares/TokenCheck')(db);
    const UserController = require('../controllers/UserController')(db);

    app.get('/users', TokenMiddleware.tokenCheck, UserController.getAll);

    app.post('/deleteUser', TokenMiddleware.tokenCheck, UserController.delete);
}