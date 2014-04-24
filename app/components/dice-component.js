export default Ember.Component.extend({
  score: 0,

  actions: {
    roll: function() {
      var dice = this.get('dice');
      dice.forEach(function(die) {
        die.roll();
      });
    },

    scoreDice: function() {
      var score;
      score = this.get('dice').reduce(function(previousValue, die) {
        return previousValue + die.value
      }, 0);
      this.set('score', score);
      this.sendAction('action', score);
    }
  }
});