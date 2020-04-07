const pokemons = [
  {
    "id": 1,
    "name": "pikachu",
    "battlePoint": 25,
    "type": "normal"
  },
  {
    "id": 3,
    "name": "togepi",
    "battlePoint": 5,
    "type": "special"
  },
  {
    "id": 4,
    "name": "mitu",
    "battlePoint": 99999999,
    "type": "special"
  },
  {
    "id": 5,
    "name": "baygon",
    "battlePoint": -99999999,
    "type": "special"
  },
  {
    "id": 6,
    "name": "houndDog",
    "battlePoint": 4,
    "type": "normal"
  }
]

let deleteId = 5;

// cara - 1
// for (let i = 0; i < pokemons.length; i++) {
//   if (pokemons[i].id === deleteId) {
//     pokemons.splice(i, 1);
//   }
// }

// cara - 2
// const modifyPokemons = []
// for (let i = 0; i < pokemons.length; i++) {
//   if (pokemons[i].id !== deleteId) {
//     modifyPokemons.push(pokemons[i]);
//   }
// }

// cara - 3
// const modifyPokemons = pokemons.filter(pokemon => {
//   return pokemon.id === deleteId;
// });

console.log(pokemons);