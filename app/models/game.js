var Game = DS.Model.extend({
  participations: DS.hasMany('participation', {async: true}),
  turns: DS.hasMany('turn', {async: true}),

  currentTurn: function() {
    return this.get('turns.lastObject');
  }.property('turns.lastObject'),

  numberOfTurns: function() {
    return this.get('turns.length');
  }.property('turns.length'),

  numberOfParticipants: function() {
    return this.get('participations.length');
  }.property('participations.length'),

  currentParticipant: function() {
    return this.get('currentTurn.participation');
  }.property('currentTurn'),

  participantIndex: function() {
    var partIndex, partsIndexes;
    partsIndexes = this.get('participations').map(function(participation) {
      return participation.get('id');
    });
    
    partIndex = this.get('currentParticipant.id');

    return partsIndexes.indexOf(partIndex);
  }.property('participations.@each.id', 'currentParticipant.id'),

  nextParticipant: function() {
    var partIndex, currentParticipant, nextParticipant, participations;
    participations = this.get('participations');
    partIndex = this.get('participantIndex');
    
    if (partIndex === -1 || partIndex ===  this.get('numberOfParticipants') - 1) {
      nextParticipant = participations.objectAt(0);
    } else {
      nextParticipant = participations.objectAt(partIndex + 1);
    }
    return nextParticipant;
  }.property('participations', 'currentParticipant', 'numberOfParticipants', 'participantIndex')
});

Game.FIXTURES = [
  {
    id: 1,
    participations: [1, 2],
    turns: [1]
  }
];

export default Game;

