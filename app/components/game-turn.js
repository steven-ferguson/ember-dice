import Die from "appkit/models/die"

export default Ember.Component.extend({
  dice: [Die.create(), Die.create(), Die.create(), Die.create(), Die.create()]
});