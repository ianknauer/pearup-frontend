import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    viewMessages() {
      this.transitionTo('users');
    }
  }
});
