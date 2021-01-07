'use strict';
require('dotenv').config();
const {v4: uuid} = require('uuid');


let Tools = {
    uuid: () => {
        return uuid();
    },

}
module.exports = Tools;