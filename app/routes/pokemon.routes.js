'use strict';
const pokemons = require('../../pokemons.json');
const fs = require('fs');
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const PokemonController = require('../controllers/PokemonController')(db);

    app.get('/getPokemons', PokemonController.getPokemons);

    app.get('/getPokemon/:id', PokemonController.getPokemonById);

    app.delete('/deletePokemon/:id', PokemonController.deletePokemonById);
}