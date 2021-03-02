'use strict';
module.exports = (Teams) => {
    const Tools = require('../utils/Tools');
    return {
        getAll: async () => {
            return await Teams.findAll();
        },
        getByUserId: async (id) => {
            return await Teams.findOne({
                where: {
                    userId: id
                }
            });
        },
        edit: async (user_id, pokemonList) => {
            try {
                await Teams.update({list: pokemonList}, {
                    where: {
                        userId: user_id
                    }
                });
                return true;
            } catch {
                return false;
            }
        }
    }
}