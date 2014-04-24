var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('game', { path: '/games/:game_id' });
  this.resource('new-game');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
