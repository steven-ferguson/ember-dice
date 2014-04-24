import Die from "appkit/models/die";

export default Ember.ObjectController.extend({
  dice: [Die.create(), Die.create(), Die.create(), Die.create(), Die.create()],

  actions: {
    endTurn: function() {
      this.scoreTurn();
      this.newTurn();
      this.resetDice();
    }
  },

  scoreTurn: function() {
    var game = this.get('model');
    var score = game.get('currentTurn').get('score');
    console.log(score);
    var participant = game.get('currentParticipant');
    participant.incrementProperty('score', score);
  },

  newTurn: function() {
    var game, participant, newTurn;

    game = this.get('model');
    participant = game.get('nextParticipant');

    newTurn = this.store.createRecord('turn', {
      game: game,
      participation: participant
    });
    newTurn.save();
    game.get('turns').addObject(newTurn);
  },

  resetDice: function() {
    this.set('dice', [Die.create(), Die.create(), Die.create(), Die.create(), Die.create()]);
  }
});