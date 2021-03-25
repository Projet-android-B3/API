'use strict';
module.exports = (db) => {
    const Tools = require('../utils/Tools');
    return {
        check: async (req, res, next) => {

            if (!Tools.getRequestHeaderToken(req)) return Tools.unauthorized(res);

            if (!Tools.getRequestHeaderToken(req).split('?')[1]) return Tools.unauthorized(res);

            if ((Tools.getRequestHeaderToken(req).split('?')[1]) !== process.env.PANOPTES_TOKEN) return Tools.unauthorized(res);

            next();
        }
    }
}