export default Ember.Component.extend({
  actions: {
    toggleSelected: function() {
      this.get('die').toggleProperty('isSelected');
    }
  }
});