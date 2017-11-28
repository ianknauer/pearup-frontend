import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionUser: Ember.inject.service('session-user'),

  model(params) {
    return this.store.findRecord('event', params.event_id);
  },

  actions: {
  }
});
