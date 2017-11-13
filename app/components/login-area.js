import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({

  session: service('session'),

  actions: {
    authenticate: function() {
      let { email, password } = this.getProperties('email', 'password');
      console.log(email);
      this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
     });
    }
  }
});
