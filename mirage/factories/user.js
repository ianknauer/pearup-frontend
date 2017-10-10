import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return `${faker.name.firstName()}`;
  },

  age() {
    return faker.random.number({min: 65, max: 100});
  },

  avatar() {
    return 'http://via.placeholder.com/350x350';
  },

  gender() {
    return faker.random.arrayElement(["male", "female"]);
  },

  language() {
    return faker.random.arrayElement(["english", "french", "german"]);
  },

  city() {
    return faker.address.city();
  },

  country() {
    return "Canada";
  },

  description() {
    return faker.lorem.sentence(5);
  },

  review() {
    return faker.lorem.paragraph(3);
  }
});
