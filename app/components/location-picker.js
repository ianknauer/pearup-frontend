import Ember from 'ember';

export default Ember.Component.extend({
  location: ["Vancouver", "Richmond", "Burnaby"],
  classNames: ['location-picker'],

  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  },

  actions: {
  }

});
