import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),

  queryParams: ['distance'],
  distance: 10,
  userLocation: null,

  actions: {
    setDistance(value) {
      this.set('distance', value)
    }
  }
});
