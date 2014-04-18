var Player = DS.Model.extend({
  participations: DS.hasMany('participation', {async: true}),
  firstName: DS.attr('string')
});

Player.FIXTURES = [
  {
    id: 1,
    firstName: 'Mike',
    participations: [1]
  },
  {
    id: 2,
    firstName: 'Steve',
    participationss: [2]
  }
];

export default Player;