import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  sessionUser: Ember.inject.service('session-user'),
  geolocation: Ember.inject.service(''),


  queryParams: {
    distance: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('event', { filter: { distance: params.distance } });
  },

  actions: {
      getUserLocation: function() {
        let self = this;
        this.get('geolocation').getLocation().then(() => {
          let currentLocation = this.get('geolocation').get('currentLocation');
          this.get('sessionUser.user').setProperties({longitude: currentLocation[0], latitude: currentLocation[1]});
          this.get('sessionUser').update().then(() => {
            this.refresh();
          });

        });
      }
    }
});
