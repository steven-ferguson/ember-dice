import Die from "appkit/models/die";

export default Ember.Array.extend({
  init: function() {
    var dice = [Die.create(), Die.create(), Die.create(), Die.create()];
    this.set('items', dice);
  },

  items: []
});