import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  location: validator('presence', true),
  name: validator('presence', true),
  spots: validator('presence', true),
  dish: validator('presence', true),
  date: validator('presence', true),
  time: validator('presence', true),
  description: validator('presence', true),
  ingredients: validator('presence', true),
});


export default DS.Model.extend(Validations, {
  name: DS.attr(),
  description: DS.attr(),
  ingredients: DS.attr(),
  city: DS.attr(),
  location: DS.attr(),
  time: DS.attr(),
  date: DS.attr(),
  instructor: DS.attr(),
  spots: DS.attr(),
  dish: DS.attr(),
  pic: DS.attr(),
  users: DS.hasMany('user'),
});
