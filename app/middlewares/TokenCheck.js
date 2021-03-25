'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    return {
        tokenCheck: async(req, res, next) => {

            // Check which token is used
            let token = req.headers.authorization;



            if (!token) return Tools.itemNotFound(res, 'Throw error in tokenCheck:13');

            const authorization = token.split(' ')[1];

            if (!authorization) return Tools.itemNotFound(res, 'Throw error in tokenCheck:17');

            if (Tools.getRequestHeaderToken(req).split('?')[1]) {
                if ((Tools.getRequestHeaderToken(req).split('?')[1]) !== process.env.PANOPTES_TOKEN) return Tools.unauthorized(res);

                return next();
            }

            try {

                const user = await Users.findOne({
                    where: {
                        token: authorization
                    }
                });

                if (!user) {
                    return Tools.itemNotFound(res, 'Throw error in tokenCheck:28');
                }

                // Enable if user_id is sent with the req
                // if (user.token !== token) {
                //     return Tools.itemNotFound(res);
                // }

                next();

            } catch (err) {
                return Tools.internalError(res, err);
            }
        }
    }
}