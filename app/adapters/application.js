import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(HasManyQuery.RESTAdapterMixin, DataAdapterMixin, {
  host: 'https://pearup.nanoapp.io/api',
  namespace: 'v1',
  authorizer: 'authorizer:devise',
});
