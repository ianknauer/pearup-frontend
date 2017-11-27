import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),

  isShowingModal: true,

  actions: {
    submit() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal: function() {
      let event = this.get('model');
      event.save();
      this.toggleProperty('isShowingModal');
      this.transitionToRoute('events');
    }
  }

});
