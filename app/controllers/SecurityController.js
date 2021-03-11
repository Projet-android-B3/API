'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Teams = db.Team;
    const Tools = require('../utils/Tools');

    return {
        login: async (req, res) => {
            const {email, password} = req.body;
            if (!email || !password) {
                return Tools.paramMissing(res);
            }
            try {
                // Check if user exists
                const user = await Users.findOne({
                    where: {
                        email: email
                    }
                });
                if (!user) {
                    return Tools.itemNotFound(res);
                }
                // Check if passwords match
                if (user.password === Tools.hashPassword(password)) {
                    const token = Tools.uuid();
                    // Create user to send, because we don't want to send the user's password
                    const userToSend = {
                        id: user.id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        isAdmin: user.isAdmin,
                        userToken: token
                    };
                    await Users.update({token: token}, {
                        where: {
                            id: userToSend.id
                        }
                    });
                    return res.send(userToSend);
                } else {
                    return Tools.itemNotFound(res);
                }
            } catch {
                return Tools.internalError(res);
            }
        },

        register: async (req, res) => {
            const {email, password} = req.body;
            const user = await Users.findOne({
                where: {
                    email: email
                }
            });
            if (user) {
                // We use paramMissing for the Bad Request
                return Tools.paramMissing(res);
            }
            try {
                const user = await Users.create({
                    id: Tools.uuid(),
                    email: email,
                    password: Tools.hashPassword(password)
                });
                await Teams.create({
                    id: Tools.uuid(),
                    list: null,
                    userId: user.id
                });
                return Tools.success(res);
            } catch (err) {
                return Tools.internalError(res, err);
            }
        },

        checkToken: async (req, res) => {
            return res.sendStatus(200);
        }
    }
}