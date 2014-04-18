export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('turn', params.turn_id);
  }
});