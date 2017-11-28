import Ember from 'ember';
export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    save(user){
      let newUser = user;
      newUser.validate()
        .then(({ validations }) => {
          if (validations.get('isValid')) {
              newUser.save()
              this.transitionToRoute('login');
          }

      })
    }
  }
});
