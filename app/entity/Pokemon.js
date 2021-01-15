'use strict';
module.exports = (db) => {
    const Pokemons = db.Pokemon;
    const Tools = require('../utils/Tools');
    return {
        getAll: async () => {
            return await Pokemons.findAll();
        },
        getById: async (id) => {
            return await Pokemons.findOne({
                where: {
                    id: id
                }
            });
        },
    }
}