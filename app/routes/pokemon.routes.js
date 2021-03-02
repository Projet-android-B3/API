'use strict';
// const pokemons = require('../../pokemons.json');
// const fs = require('fs');
const Tools = require('../utils/Tools');

module.exports = (app, db) => {

    const TokenMiddleware = require('../middlewares/TokenCheck')(db);
    const PokemonController = require('../controllers/PokemonController')(db);

    app.get('/getPokemons', TokenMiddleware.tokenCheck, PokemonController.getPokemons);

    app.get('/getPokemon/:id', TokenMiddleware.tokenCheck, PokemonController.getPokemonById);

    app.delete('/deletePokemon/:id', TokenMiddleware.tokenCheck, PokemonController.deletePokemonById);
}