'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const PanoptesMiddleware = require('../middlewares/PanoptesMiddleware')(db);

    // A protéger avec le token PANOPTES
    app.get('/routes', PanoptesMiddleware.check, function (req, res) {
        res.send(app._router.stack);
    });
}