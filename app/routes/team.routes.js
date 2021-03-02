'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TokenMiddleware = require('../middlewares/TokenCheck')(db);
    const TeamController = require('../controllers/TeamController')(db);

    app.get('/getTeam/:user_id', TokenMiddleware.tokenCheck, TeamController.getTeam);

    app.post('/getTeam/:user_id/edit', TokenMiddleware.tokenCheck, TeamController.editTeam);
}