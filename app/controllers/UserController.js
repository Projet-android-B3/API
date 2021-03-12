'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    return {
        delete: async (req, res) => {
            const id = req.body.user_id;
            if (!id) {
                return Tools.paramMissing(res);
            }
            try {
                const user = await Users.findOne({
                    where: {
                        id: id
                    }
                });
                if (!user) {
                    // We use paramMissing for Bad Request
                    return Tools.paramMissing(res);
                }
                await Users.destroy({
                    where: {
                        id: id
                    }
                });
                return Tools.success(res);
            } catch {
                return Tools.internalError(res);
            }
        },

        getAll: async (req, res) => {
            return res.send(await Users.findAll({
                attributes: ['id', 'email', 'isAdmin']
            }));

        },

        changeStatus: async (req, res) => {

            if (!req.body.isAdmin || !req.body.user_id) return Tools.paramMissing(res);

            try {
                // Check if user to update exists
                const userToUpdate = await Users.findOne({
                    where: {
                        id: req.body.user_id
                    }
                });
                if (!userToUpdate) return Tools.itemNotFound(res);
                await Users.update({isAdmin: !userToUpdate.isAdmin}, {
                    where: {
                        id: req.body.user_id
                    }
                });
                return Tools.success(res);
            } catch (err) {
                return Tools.internalError(res, err);
            }

        }
    }
}