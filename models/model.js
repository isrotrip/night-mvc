'use strict';

const fs = require('fs');
const PokemonFactory = require('./pokemonFactory');

class Model {
  static listPokemon() {
    const objPokemon = JSON.parse(fs.readFileSync('./pokemon.json', { encoding: 'utf-8' }));

    const pokemons = [];

    for (let i = 0; i < objPokemon.length; i++) {
      pokemons.push(PokemonFactory.create(objPokemon[i]));
    }

    return pokemons;
  }

  static createPokemon(objPokemon) {
    const pokemons = Model.listPokemon();
    
    let id = 1;
    
    if (pokemons.length > 0) {
      id = pokemons[pokemons.length - 1].id + 1;
    }

    objPokemon.id = id;

    const newPokemon = PokemonFactory.create(objPokemon);

    pokemons.push(newPokemon);

    Model.savePokemons(pokemons);

    return newPokemon;
  }

  static savePokemons(pokemons) { // disini ngga butuh jadi instance save
    const rawsData = [];

    for (let i = 0; i < pokemons.length; i++) {
      rawsData.push(pokemons[i].toJSON());
    }

    const stringRaw = JSON.stringify(rawsData, null, 2);

    fs.writeFileSync('./pokemon.json', stringRaw);
  }

  static listTrainer() {
    // abaikan dulu
  }
}

module.exports = Model;