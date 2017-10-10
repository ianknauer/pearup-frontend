import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['gender', 'language', 'location', 'interests'],
  gender: null,
  language: null,
  city: null,
  interests: null,

  currentInterests: Ember.computed('interests', function() {
    let interests = this.get('interests');
    if (!Ember.isEmpty(interests)) {
      return interests.split(",");
    }
  }),

  refinedUsers: Ember.computed.filter('model', function(users) {
    let interests = this.get('interests');
    let search1 = []
    let search2 = []
    let search3 = []
    let search4 = []
    let search5 = []
    let search6 = []
    let search7 = []
    let newArray = []

    console.log(interests);

    if (!Ember.isEmpty(interests)) {
      let inters = interests.split(",");
      search1 = users.get('interests').isAny('name', inters[0]);
      search2 = users.get('interests').isAny('name', inters[1]);
      search3 = users.get('interests').isAny('name', inters[2]);
      search4 = users.get('interests').isAny('name', inters[3]);
      search5 = users.get('interests').isAny('name', inters[4]);
      search6 = users.get('interests').isAny('name', inters[5]);
      search7 = users.get('interests').isAny('name', inters[6]);
    } else {
      return users;
    };

    if (search1 == true || search2 == true || search3 == true || search4 == true || search5 == true || search6 == true || search7 == true) {
      return true;
    } else {
      return false;
    }

  }).property('interests'),


  filteredUsers: Ember.computed('interests', 'gender', 'language', 'city', 'model', function() {

    let users = this.get('refinedUsers');
    let gender = this.get('gender');
    let language = this.get('language');
    let city = this.get('city');


    if (gender) {users = users.filterBy('gender', gender)};
    if (language) {users = users.filterBy('language', language)};
    if (city) {users = users.filterBy('city', city)};

    return users;
  }),

  actions: {
    buttonClick(params) {
      let oldParams = this.get('interests');
      let newParams = "";
      console.log(oldParams);
      if(oldParams == null || oldParams == "") {
        newParams = `${params}`;
      } else {
        newParams = `${oldParams},${params}`;
      }

      this.set('interests', newParams);
    },

    removeInterest(params) {
      let oldParams = this.get('interests');
      let olds = oldParams.split(",");

      let things = olds.filter(function(item, index, enumerable){
        return item != params;
      });
      let flattened = things.toString();
      this.set('interests', flattened);
    }
  },
});
