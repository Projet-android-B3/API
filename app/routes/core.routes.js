'use strict';
const pokemons = require('../../pokemons.json');
const fs = require('fs');
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const PokemonController = require('../controllers/LivresController')(db);
    // const Pokemons = db.Pokemon;


    app.get('/', (req, res) => {
        // Tools.pokemonSeeder(fs, res, Pokemons);
        return res.send('API works');
    });
};
