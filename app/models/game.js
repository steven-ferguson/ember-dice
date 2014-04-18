var Game = DS.Model.extend({
  participations: DS.hasMany('participation', {async: true}),
  turns: DS.hasMany('turn', {async: true})
});

Game.FIXTURES = [
  {
    id: 1,
    participations: [1, 2],
    turns: [1]
  }
];

export default Game;

