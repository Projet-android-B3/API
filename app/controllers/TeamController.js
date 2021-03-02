'use strict';
module.exports = (db) => {
    const Teams = db.Team;
    const TeamEntity = require('../entity/Team')(Teams);
    const Tools = require('../utils/Tools');
    return {
        getTeam: async (req, res) => {

            const id = req.params.user_id;

            if (!id) {
                return Tools.paramMissing(res);
            }

            try {
                const team = await TeamEntity.getByUserId(id);
                if (!team) {
                    return Tools.itemNotFound(res);
                }
                return res.send(team);
            } catch {
                return Tools.internalError(res);
            }
        },

        editTeam: async (req, res) => {

            const id = req.params.user_id;
            const pokemonList = req.body.list;

            if (!id || !pokemonList) {
                return Tools.paramMissing(res);
            }

            try {

                if (await TeamEntity.edit(id, pokemonList)) {
                    return Tools.success(res);
                } else {
                    return Tools.internalError(res);
                }
            } catch {
                return Tools.internalError(res);
            }

        }
    }
}