export default Ember.ArrayController.extend({
  remainingRolls: 2,

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