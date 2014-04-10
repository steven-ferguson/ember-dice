export default Ember.Component.extend({
  actions: {
    roll: function() {
      var dice = this.get('dice');
      dice.forEach(function(die) {
        die.roll();
      });
    }
  }
});