import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    gender: {
      replace: false,
      refreshModel: true
    },
    language: {
      replace: false,
      refreshModel: true
    },
    city: {
      replace: false,
      refreshModel: true,
    },
    interests: {
      replace: false,
      refreshModel: true,
      type: 'array',
    }
  },

  model(params) {
    return this.store.findAll('user', {include: 'interests'});
  },

  actions: {
    viewMessages() {
      this.transitionTo('users.messages');
    }
  }
});
