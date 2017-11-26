import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {

    session: service('session'),
    sessionUser: service('session-user'),



    actions: {
      logout() {
        this.get('sessionUser.user').then((user) => {
          user.set('latitude', null);
          user.set('longitude', null);
        });
        this.get('sessionUser').update().then(() => {
          this.get('session').invalidate();
        });
      },
    }


});
