import Game from "appkit/models/game";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('game', 1);
  },

  afterModel: function(game, transition) {
    this.transitionTo('game', game);
  }
});