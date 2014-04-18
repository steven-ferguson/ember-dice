var Turn = DS.Model.extend({
  participation: DS.belongsTo('participation', {async: true}),
  game: DS.belongsTo('game', {async: true})
});

Turn.FIXTURES = [
  {
    id: 1,
    participation: 1,
    game: 1
  }
];

export default Turn;