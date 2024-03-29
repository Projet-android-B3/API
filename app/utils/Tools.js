'use strict';
require('dotenv').config();
const {v4: uuid} = require('uuid');
const crypto = require('crypto');


let Tools = {
    uuid: () => {
        return uuid();
    },

    pokemonSeeder: (fs, res, Pokemons) => {
        fs.readFile('./pokemons.json', 'utf8', async (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            try {
                const pokemons = JSON.parse(jsonString);
                for (let pokemon of pokemons) {
                    await Pokemons.create({
                        name: pokemon.name.french,
                        type: JSON.stringify(pokemon.type),
                        health: pokemon.base.HP,
                        attack: pokemon.base.Attack,
                        defense: pokemon.base.Defense,
                        sp_attack: pokemon.base.Sp_Attack,
                        sp_defense: pokemon.base.Sp_Defense,
                        speed: pokemon.base.Speed
                    });
                }
            } catch (err) {
                console.log('Error parsing JSON string:', err)
                return res.sendStatus(500);
            }
        })
        return res.sendStatus(200);
    },
    hashPassword: (pwd) => {
        return crypto.createHash('sha256').update(pwd).digest('hex');
    },
    getRequestHeaderToken: (req) => {
        let token = req.headers.authorization;
        if (!token) return false;

        const authorization = token.split(' ')[1];

        if (!authorization) return false;

        return authorization;
    },

    paramMissing: (res, message) => {
        return res.status(400).send({success: false, message: message});
    },

    itemNotFound: (res, message = null) => {
        return res.status(404).send({success: false, message: message ? message : 'Item not found'});
    },
    internalError: (res, err = null) => {
        return res.status(500).send({success: false, message: err ? err : 'Internal server error'});
    },
    success: (res, data) => {
        return res.status(200).send({success: true, message: 'Success', data: data});
    },
    unauthorized: (res, message = null) => {
        return res.status(401).send({success: false, message: message ? message : 'Unauthorized'});
    }

}
module.exports = Tools;