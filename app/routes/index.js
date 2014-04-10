export default Ember.Route.extend({
  model: function() {
    return [{id: 1, value: 'one'}, {id: 2, value: 'two'}, {id: 3, value: 'three'}];
  }
});
