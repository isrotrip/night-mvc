'use strict';

class Pokemon {
  constructor(id, name, battlePoint, type) {
    this._id = id;
    this._name = name;
    this._battlePoint = battlePoint;
    this._type = type;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      battlePoint: this._battlePoint,
      type: this._type
    }
  }
}

class NormalPokemon extends Pokemon {
  constructor(id, name, battlePoint) {
    super(id, name, battlePoint, 'normal');
  }
}

class SpecialPokemon extends Pokemon {
  constructor(id, name, battlePoint) {
    super(id, name, battlePoint, 'special');
  }
}

module.exports = {
  NormalPokemon,
  SpecialPokemon
}