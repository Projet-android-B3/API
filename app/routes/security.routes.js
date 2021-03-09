'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TokenMiddleware = require('../middlewares/TokenCheck')(db);
    const SecurityController = require('../controllers/SecurityController')(db);

    app.post('/login', SecurityController.login);

    app.post('/register', SecurityController.register);

    app.get('/checkToken', TokenMiddleware.tokenCheck, SecurityController.checkToken);
}