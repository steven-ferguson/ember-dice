var Participation = DS.Model.extend({
  player: DS.belongsTo('player', {async: true}),
  turns: DS.hasMany('turn', {async: true}),
  game: DS.belongsTo('game', {async: true}),
  score: DS.attr('string'),
  isCurrentPlayer: DS.attr('boolean', {defaultValue: false})
});

Participation.FIXTURES = [
  {
    id: 1,
    player: 1,
    game: 1,
    score: 10,
    isCurrentPlayer: true
  },
  {
    id: 2,
    player: 2,
    game: 1,
    score: 0,
    isCurrentPlayer: false
  }
];

export default Participation;