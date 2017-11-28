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
      return Ember.RSVP.hash({
       participateEvent: this.store.findAll('participate-event', {reload: true}),
       ownerEvent: this.store.findAll('owner-event', {reload: true}),
       events: this.get('store').query('event', { filter: { distance: params.distance } }, {reload: true}),
      });
    },

    setupController(controller, models) {
      controller.set('participate-event', models.participateEvent);
      controller.set('owner-event', models.ownerEvent);
      controller.set('events', models.events);

    },


  actions: {
      getUserLocation: function() {
        let self = this;
        let user = this.get('sessionUser.user');


        this.get('geolocation').getLocation().then(() => {
          let currentLocation = this.get('geolocation').get('currentLocation');
          user.setProperties({longitude: currentLocation[0], latitude: currentLocation[1]});
          this.get('sessionUser').update().then(() => {
            console.log('updating user');
            self.send('sessionChanged');
          });

        });
      },

      sessionChanged: function() {
        this.transitionTo('events');
      }
    }
});
