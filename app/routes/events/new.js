import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionUser: Ember.inject.service('session-user'),

  model(params) {
    return this.store.createRecord('event');
  },

  actions: {
    submit() {
      let event = this.get('currentModel');
      event.user = this.get('sessionUser');
      event.save();
      this.transitionTo("events");
    },
  }
});
