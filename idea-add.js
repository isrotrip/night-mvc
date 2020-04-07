'use strict';

const fs = require('fs');
const PokemonFactory = require('./models/pokemonFactory');

// proses database => list
const objPokemon = JSON.parse(fs.readFileSync('./pokemon.json', { encoding: 'utf-8' }));

const result = [];

for (let i = 0; i < objPokemon.length; i++) {
  result.push(PokemonFactory.create(objPokemon[i]));
}
// proses database => list selesai

// proses database => create
const newPokemon = PokemonFactory.create({
  id: 4,
  name: 'mitu',
  battlePoint: 999999999,
  type: 'special'
})

result.push(newPokemon);

// proses database => save
const rawsData = [];

for (let i = 0; i < result.length; i++) {
  rawsData.push(result[i].toJSON());
}

const stringRaw = JSON.stringify(rawsData, null, 2);

fs.writeFileSync('./pokemon.json', stringRaw);

// preses View untuk nampilin
console.log('berhasil membuat ' + newPokemon.name);