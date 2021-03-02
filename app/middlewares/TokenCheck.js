'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    return {
        tokenCheck: async(req, res, next) => {

            // Check which token is used
            let token = req.body.token ? req.body.token : null;
            let userId= req.body.userId;

            if (token == null) return Tools.itemNotFound(res);

            try {

                const user = await Users.findOne({
                    where: {
                        id: userId
                    }
                });

                if (!user) {
                    return Tools.itemNotFound(res);
                }

                if (user.token !== token) {
                    return Tools.itemNotFound(res);
                }

                next();

            } catch {
                return Tools.internalError(res);
            }
        }
    }
}