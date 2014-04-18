export default Ember.ObjectController.extend({
  actions: {
    endTurn: function() {
      //Look at event bubbling to transition to a new turn.
      //Turn knows its particiaption. Send this to game which
      //knows all the participations so that it can call transitionToRoute
      //to a route which creates a new turn with the next participation.  
    }
  }
});
