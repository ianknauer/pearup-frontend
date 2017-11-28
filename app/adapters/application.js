import DS from 'ember-data';
import Ember from 'ember';
import HasManyQuery from 'ember-data-has-many-query';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(HasManyQuery.RESTAdapterMixin, DataAdapterMixin, {
  // host: 'https://pearup.nanoapp.io',
  host: 'http://localhost:3000',

  namespace: 'api/v1',

  authorizer: 'authorizer:application',

  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  },

  // shouldReloadRecord: function(store, snapshot) {
  //   return true;
  // },
  //
  // shouldReloadAll: function(store, snapshot) {
  //   return true;
  // },
  //
  // shouldBackgroundReloadRecord: function(store, snapshot) {
  //   return false;
  // },
  //
  // shouldBackgroundReloadAll: function(store, snapshot) {
  //   return false;
  // }
});
