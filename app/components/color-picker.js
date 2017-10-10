import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['red', 'green', 'blue', 'orange', 'yellow', 'purple'],

  isShowingPopup: false,

  click() {
    this.toggleProperty('isShowingPopup');
  },

});
