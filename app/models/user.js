import DS from 'ember-data';
import Ember from 'ember';
import HasManyQuery from 'ember-data-has-many-query';

export default DS.Model.extend(HasManyQuery.ModelMixin, {
  name: DS.attr(),
  age: DS.attr(),
  email: DS.attr(),
  specialty: DS.attr(),
  username: DS.attr(),
  address: DS.attr(),
  password: DS.attr(),
  avatar: DS.attr(),
  gender: DS.attr(),
  height: DS.attr(),
  description: DS.attr(),
  biography: DS.attr(),
  city: DS.attr(),
  country: DS.attr(),
  review: DS.attr(),
  language: DS.attr(),
  interests: DS.hasMany('interest'),
  events: DS.hasMany('events'),
});
