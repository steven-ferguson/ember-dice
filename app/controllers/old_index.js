export default Ember.ArrayController.extend({
  remainingRolls: 2,

  score: function() {
    var values = this.mapBy('value');
    return values.reduce(function(total, value) {
      return total + value;
    });
  }.property('this.@each.value'),

  anyReRolls: function() {
    return this.get('remainingRolls') == 0;
  }.property('remainingRolls'),

  actions: {
    roll: function() {
      var selectedDice = this.filterBy('isSelected', true);
      selectedDice.forEach(function(die) {
        die.roll();
      });

      var remainingRolls = this.get('remainingRolls');
      this.set('remainingRolls', remainingRolls - 1);
    }
  }
});