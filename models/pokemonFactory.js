'use strict';

const { NormalPokemon, SpecialPokemon } = require('./pokemon.js');

class PokemonFactory {
  static create(objPokemon) {
    const { id, name, battlePoint, type } = objPokemon;

    if (type === 'special') {
      return new SpecialPokemon(id, name, battlePoint);
    } else if (type === 'normal') {
      return new NormalPokemon(id, name, battlePoint);
    } else {
      throw `type: ${type} is not available`;
    }
  }
}

module.exports = PokemonFactory;