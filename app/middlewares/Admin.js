'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    return {
        isAdmin: async (req, res, next) => {

            if (!Tools.getRequestHeaderToken(req)) return Tools.unauthorized(res);

            try {

                const user = await Users.findOne({
                    where: {
                        token: Tools.getRequestHeaderToken(req)
                    }
                });

                if (!user) return Tools.itemNotFound(res);

                if (!user.isAdmin) return Tools.unauthorized(res);

            } catch (err) {
                return Tools.internalError(res, err);
            }
            next();
        }
    }
}