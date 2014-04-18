var Game = DS.Model.extend({
  participations: DS.hasMany('participation', {async: true})
});

Game.FIXTURES = [
  {
    id: 1,
    participations: [1, 2]
  }
];

export default Game;

