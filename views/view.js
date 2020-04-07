'use strict';

class View {
  static showByType(pokemon) {
    if (pokemon.type === 'special') {
      console.log(`A special pokemon ${pokemon.name} appear here`);
    } else if (pokemon.type === 'normal') {
      console.log(`Oh its just pokemon ${pokemon.name}`);
    }
  }

  static showList(dataList) {
    for (let i = 0; i < dataList.length; i++) {
      const pokemon = dataList[i];
      View.showByType(pokemon);
    }
  }

  static showSuccess(response) {
    console.log(`Success\n=================`);
    console.log(response.message);
    console.log('Data:');
    console.log(response.data);
  }
}

module.exports = View;