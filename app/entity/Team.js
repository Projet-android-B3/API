'use strict';
module.exports = (Teams) => {
    const Tools = require('../utils/Tools');
    return {
        getAll: async () => {
            return await Teams.findAll();
        },
        getById: async (id) => {
            return await Teams.findOne({
                where: {
                    id: id
                }
            });
        },
        edit: async (user_id, pokemonList) => {
            try {
                await Teams.update({list: pokemonList}, {
                    where: {
                        user_id: user_id
                    }
                });
                return true;
            } catch {
                return false;
            }
        }
    }
}