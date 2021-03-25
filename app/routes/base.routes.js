'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    app.get('/', function (req, res) {
        res.send("API works");
    });

    app.get('/routes', function (req, res) {
        res.send(app._router.stack);
    });
}