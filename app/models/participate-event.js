import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  ingredients: DS.attr(),
  location: DS.attr(),
  time: DS.attr(),
  city: DS.attr(),
  date: DS.attr(),
  instructor: DS.attr(),
  spots: DS.attr(),
  dish: DS.attr(),
  pic: DS.attr(),
  users: DS.hasMany('user'),
});
