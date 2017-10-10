import Ember from 'ember';

export default Ember.Component.extend({
  Languages: ["English", "French", "German"],
  classNames: ['language-picker'],

  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  },

  actions: {
  }

});
