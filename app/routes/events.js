import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import macros from 'ember-macaroni'; // imports all the things

const { rejectFromCollectionByValue } = macros;
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionUser: Ember.inject.service('session-user'),

  model(params) {
    return this.store.findAll('event').then(function(events) {
      return rejectFromCollectionByValue('events', 'user.id', 1);
    });

  },

});
