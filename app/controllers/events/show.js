import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),

  actions: {
    save() {
      let self = this;
      let event = this.get('model');
      this.get('store').findRecord('user', 'me').then(function(user){
        user.get('events').pushObject(event);
        console.log(user);
        user.save();
      });
     this.transitionToRoute('events');

    }
  }



});
