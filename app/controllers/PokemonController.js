'use strict';
module.exports = (db) => {
    const Pokemons = db.Pokemon;
    const PokemonEntity = require('../entity/Pokemon')(db);
    const Tools = require('../utils/Tools');
    return {
        getPokemons: async (req, res) => {
            return res.send(await PokemonEntity.getAll());
        },

        getPokemonById: async (req, res) => {
            const id = req.params.id;
            if (!id) {
                return Tools.paramMissing(res);
            }
            try {
                const pokemon = await PokemonEntity.getById(id);
                if (!pokemon) {
                    return Tools.itemNotFound(res);
                }
                return res.send(pokemon);
            } catch {
                return Tools.internalError(res);
            }
        },

        deletePokemonById: async (req, res) => {
            const id = req.body.id;
            if (!id) {
                return Tools.paramMissing(res);
            }
            try {
                await Pokemons.destroy({
                    where: {
                        id: id
                    }
                });
                return Tools.success(res);
            } catch {
                return Tools.internalError(res);
            }
        },
    }
}