'use strict';
module.exports = (db) => {
    const Users = db.User;
    const Tools = require('../utils/Tools');
    const crypto = require('crypto');
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

                if (user.password === password) {

                    // Create user to send, because we don't want to send the user's password
                    const userToSend = {
                        id: user.id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        token: crypto.randomBytes(48, async function (err, buffer) {
                            const token = buffer.toString('hex');
                            await Users.update({token: token}, {
                                where: {
                                    id: user.id
                                }
                            });
                            return token;
                        })
                    };

                    return res.send(userToSend);
                } else {
                    return Tools.itemNotFound(res);
                }

            } catch {
                return Tools.internalError(res);
            }
        },

        register: async (req, res) => {

            const {email, firstname, lastname, password} = req.body;

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
                await Users.create({
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    password: password
                });
                return Tools.success(res);
            } catch {
                return Tools.internalError(res);
            }
        }
    }
}