'use strict';
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    app.get('/', function () {
        console.log("API works");
    });
}