import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionUser: Ember.inject.service('session-user'),

  model(params) {
    let user = this.get('sessionUser.user');
    return this.store.createRecord('event', {
      user: user
    });
  },

  actions: {
    submit() {
      let event = this.get('currentModel');
      event.save();

    },
  }
});
