import Ember from 'ember';
export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    save(user){
      let newUser = user;
      newUser.validate()
        .then(({ validations }) => {
          console.log(validations.get('isValid'));
          if (validations.get('isValid')) {
              newUser.save()
            // this.toggleProperty('isShowingModal');
          }
    
      })
      .then(()=>{
        this.get('session')
        .authenticate('authenticator:oauth2',
          newUser.get('username'), newUser.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error ||reason);
        });
      })
    }
  }
});
