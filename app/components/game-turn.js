import Die from "appkit/models/die";

export default Ember.Component.extend({
  actions: {
    updateScore: function(score) {
      var turn = this.get('turn');
      turn.set('score', score);
    }
  }
});
