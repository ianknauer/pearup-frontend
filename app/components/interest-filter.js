import Ember from 'ember';

export default Ember.Component.extend({
  Interests: ["hiking", "dog walking", "water aerobics", "cycling", "yoga", "dancing"],

  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  },

  actions: {
    addToQueryParams(params) {
      this.sendAction('add', params);
    }
  },


});
