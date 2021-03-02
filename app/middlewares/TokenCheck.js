'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    return {
        tokenCheck: async(req, res, next) => {

            // Check which token is used
            let token = req.body.token ? req.body.token : null;

            if (token == null) return Tools.itemNotFound(res);

            try {

                const tokenFromDb = await Users.findOne({
                    where: {
                        token: token
                    }
                });

                if (!tokenFromDb) {
                    return Tools.itemNotFound(res);
                }

                next();

            } catch {
                return Tools.internalError(res);
            }
        }
    }
}