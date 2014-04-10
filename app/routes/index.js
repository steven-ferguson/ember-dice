import Die from "appkit/models/die";

export default Ember.Route.extend({
  model: function() {
    return [Die.create(), Die.create(), Die.create()];
  }
});
