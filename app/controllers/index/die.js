export default Ember.ObjectController.extend({
  actions: {
    toggleSelected: function() {
      this.toggleProperty('isSelected');
    }
  }
});