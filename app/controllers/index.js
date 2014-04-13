export default Ember.ArrayController.extend({
  actions: {
    roll: function() {
      var selectedDice = this.filterBy('isSelected', true);
      selectedDice.forEach(function(die) {
        die.roll();
      });
    }
  }
});