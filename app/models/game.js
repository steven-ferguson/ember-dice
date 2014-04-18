var Game = DS.Model.extend({
  players: DS.hasMany('player', {async: true})
});

Game.FIXTURES = [
  {
    id: 1,
    players: [1, 2]
  }
];

export default Game;

