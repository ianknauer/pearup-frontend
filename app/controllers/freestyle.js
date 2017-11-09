import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),

  colorPalette: {
    'primary': {
      'name': 'orange',
      'base': '#F76B1C'
    },
    'accent': {
      'name': 'green',
      'base': '#96D18A'
    },
    'secondary': {
      'name': 'yellow',
      'base': '#FBD961'
    },
  }
});
