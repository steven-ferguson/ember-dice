export default Ember.Object.extend({
  value: 5,

  textValue: function() {
    var value = this.get('value');
    var dictionary = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'};
    return dictionary[value];
  }.property('value'),

  roll: function() {
    var newValue = Math.floor(Math.random() * 6) + 1;
    this.set('value', newValue);
  }
});