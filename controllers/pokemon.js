'use strict';

const Model = require('../models/model');
const View = require('../views/view');

class PokemonController {
  static list() {
    const pokemons = Model.listPokemon();
    View.showList(pokemons);
  }

  static create(body) {
    const inputCreate = {
      name: body[0],
      battlePoint: Number(body[1]),
      type: body[2]
    }

    const newPokemon = Model.createPokemon(inputCreate);

    View.showSuccess({
      message: `berhasil membuat pokemon dengan nama ${newPokemon.name}`,
      data: newPokemon
    });
  }  
}

module.exports = PokemonController;