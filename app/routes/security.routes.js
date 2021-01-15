'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const SecurityController = require('../controllers/SecurityController')(db);

    app.post('/login', SecurityController.login);
}