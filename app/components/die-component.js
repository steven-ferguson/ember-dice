export default Ember.Component.extend({
  actions: {
    toggleSelected: function() {
      this.toggleProperty('isSelected');
    }
  }
});