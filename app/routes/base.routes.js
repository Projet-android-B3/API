'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const AdminMiddleware = require('../middlewares/Admin')(db);

    app.get('/', function (req, res) {
        res.send("API works");
    });
}