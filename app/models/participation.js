var Participation = DS.Model.extend({
  player: DS.belongsTo('player', {async: true}),
  game: DS.belongsTo('game', {async: true}),
  score: DS.attr('string')
});

Participation.FIXTURES = [
  {
    id: 1,
    player: 1,
    game: 1,
    score: 10
  },
  {
    id: 2,
    player: 2,
    game: 1,
    score: 0
  }
];

export default Participation;