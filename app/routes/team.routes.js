'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TeamController = require('../controllers/TeamController')(db);

    app.get('/getTeam/:user_id', TeamController.getTeam);
}