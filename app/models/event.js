import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  ingredients: DS.attr(),
  location: DS.attr(),
  spots: DS.attr(),
  dish: DS.attr(),
  users: DS.hasMany('user'),
});
