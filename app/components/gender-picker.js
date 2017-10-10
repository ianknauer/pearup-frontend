import Ember from 'ember';

export default Ember.Component.extend({
  genders: ["None", "Male", "Female"],

  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  },

  actions: {
  }

});
