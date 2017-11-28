import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({

  sessionUser: service('session-user'),

  actions: {
    submit() {
      this.get('sessionUser').update().then(() => {
        this.transitionTo('profile');
      });
    },
  }

});
