import Die from "appkit/models/die";

export default Ember.Component.extend({
  score: 0,

  selectedDice: function() {
    return this.get('dice').filterBy('isSelected');
  }.property('dice.@each.isSelected'),

  actions: {
    roll: function() {
      var dice = this.get('selectedDice');
      dice.forEach(function(die) {
        die.roll();
      });
    },

    scoreDice: function() {
      var score;
      score = this.get('selectedDice').reduce(function(previousValue, die) {
        return previousValue + die.value;
      }, 0);
      this.set('score', score);
      this.updateScore(score);
    },

    endTurn: function() {
      this.sendAction('action');
    }
  },

  updateScore: function(score) {
    var turn = this.get('turn');
    turn.set('score', score);
  }
});
