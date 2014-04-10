var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('select a die', function(){
  visit('/');
  click('.die');
  andThen(function() {
    equal(find(".die.is-selected").length, 1, 'There should be a die selected');
  });
});
