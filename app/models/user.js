import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';

export default DS.Model.extend(HasManyQuery.ModelMixin, {
  name: DS.attr(),
  age: DS.attr(),
  avatar: DS.attr(),
  gender: DS.attr(),
  description: DS.attr(),
  biography: DS.attr(),
  city: DS.attr(),
  country: DS.attr(),
  review: DS.attr(),
  language: DS.attr(),
  interests: DS.hasMany('interest'),
});
