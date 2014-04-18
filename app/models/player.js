var Player = DS.Model.extend({
  games: DS.hasMany('game', {async: true}),
  firstName: DS.attr('string')
});

Player.FIXTURES = [
  {
    id: 1,
    firstName: 'Mike',
    games: [1]
  },
  {
    id: 2,
    firstName: 'Steve',
    games: [1]
  }
];

export default Player;