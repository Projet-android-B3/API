'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    app.get('/', function (req, res) {
        res.send("API works");
    });
}