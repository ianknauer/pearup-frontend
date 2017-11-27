import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  location: validator('presence', true)
})

export default DS.Model.extend(Validations, {
  name: DS.attr(),
  description: DS.attr(),
  ingredients: DS.attr(),
  location: DS.attr(),
  instructor: DS.attr(),
  spots: DS.attr(),
  dish: DS.attr(),
  pic: DS.attr(),
  users: DS.hasMany('user'),
});
