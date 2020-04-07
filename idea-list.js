'use strict';

const fs = require('fs');
const PokemonFactory = require('./models/pokemonFactory');

// proses database - ini di model
const objPokemon = JSON.parse(fs.readFileSync('./pokemon.json', { encoding: 'utf-8' }));

const result = [];

for (let i = 0; i < objPokemon.length; i++) {
  result.push(PokemonFactory.create(objPokemon[i]));
}
// proses database selesai

// proses View untuk nampilin
for (let i = 0; i < result.length; i++) {
  const pokemon = result[i];
  if (pokemon.type === 'special') {
    console.log(`A special pokemon ${pokemon.name} appear here`);
  } else if (pokemon.type === 'normal') {
    console.log(`Oh its just pokemon ${pokemon.name}`);
  }
}