export default Ember.ObjectController.extend({
  actions: {
    newTurn: function() {
      var game, newTurn;
      game = this.get('model');
      newTurn = this.store.createRecord('turn', {
        game: game
      });
      newTurn.save();
      game.get('turns').addObject(newTurn);
    }
  }
});