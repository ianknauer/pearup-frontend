import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),

  isShowingModal: true,

  actions: {
    submit() {
      let event = this.get('model');

      event.validate()
        .then(({ validations }) => {
          console.log(validations.get('isValid'));
          if (validations.get('isValid')) {
            this.toggleProperty('isShowingModal');
          }
        });
    },

    toggleModal: function() {
      let event = this.get('model');
      event.save();
      this.toggleProperty('isShowingModal');
      this.transitionToRoute('events');
    }
  }

});
