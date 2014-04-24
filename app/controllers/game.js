import Die from "appkit/models/die";

export default Ember.ObjectController.extend({
  dice: [Die.create(), Die.create(), Die.create(), Die.create(), Die.create()],

  actions: {
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
    }
  }
});