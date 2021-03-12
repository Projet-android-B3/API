'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TokenMiddleware = require('../middlewares/TokenCheck')(db);
    const AdminMiddleware = require('../middlewares/Admin')(db);
    const UserController = require('../controllers/UserController')(db);

    app.get('/users', TokenMiddleware.tokenCheck, AdminMiddleware.isAdmin, UserController.getAll);

    app.delete('/deleteUser', TokenMiddleware.tokenCheck, AdminMiddleware.isAdmin, UserController.delete);

    app.put('/changeStatus', TokenMiddleware.tokenCheck, AdminMiddleware.isAdmin, UserController.changeStatus);
}