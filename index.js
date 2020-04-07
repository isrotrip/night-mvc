'use strict';

const command = process.argv[2];
const parameters = process.argv.slice(3);

const PokemonController = require('./controllers/pokemon');

switch (command) {
  case 'list':
    PokemonController.list();
    break;
  case 'create':
    PokemonController.create(parameters);
    break;
}