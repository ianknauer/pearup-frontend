import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  username: validator('presence', true),
  address: validator('presence', true),
  password: validator('presence', true)
});

export default DS.Model.extend(HasManyQuery.ModelMixin, Validations, {
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
  latitude: DS.attr(),
  longitude: DS.attr(),
  description: DS.attr(),
  biography: DS.attr(),
  city: DS.attr(),
  country: DS.attr(),
  pic: DS.attr(),
  review: DS.attr(),
  language: DS.attr(),
  interests: DS.hasMany('interest'),
  events: DS.hasMany('events'),
  participateEvents: DS.hasMany('participate-event'),
  ownerEvents: DS.hasMany('owner-event'),
});
