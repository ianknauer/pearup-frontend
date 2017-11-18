import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  sessionUser: Ember.inject.service('session-user'),

  actions: {
		fileLoaded: function(file) {
			console.log(file.name, file.type, file.size);
			console.log(file.name, file.type, file.data, file.size);

      return this.get('store').findRecord('user', 'me').then(function(user){
        user.image = file
      });
		}
	}

});
