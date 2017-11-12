import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend( AuthenticatedRouteMixin, {

  session: service('session'),


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
    },

    logout() {
      this.get("session").invalidate();
    }
  }
});
