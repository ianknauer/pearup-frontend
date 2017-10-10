import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    searchInterests(params) {
      this.transitionTo('users', {queryParams: {interests: params}});
    },
  }

});
