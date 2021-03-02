'use strict';
require('dotenv').config();
const {v4: uuid} = require('uuid');


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

    paramMissing: (res) => {
        return res.status(400).send('Il manque un paramètre');
    },

    itemNotFound: (res) => {
        return res.status(404).send();
    },
    internalError: (res, err = null) => {
        return res.status(500).send(err);
    },
    success: (res) => {
        return res.sendStatus(200);
    }

}
module.exports = Tools;