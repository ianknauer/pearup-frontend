export default function() {

  // this.namespace = 'api';

  this.get('/users', (schema, request) => {
    let users = [];
    console.log(request);
    if (Object.keys(request.queryParams.gender).length === 0 && Object.keys(request.queryParams.language).length === 0)  {
      users = schema.users.all();
    } else if (Object.keys(request.queryParams.gender).length === 0) {
      users = schema.users.where({language: request.queryParams.language});

    } else if (Object.keys(request.queryParams.language).length === 0) {
      users = schema.users.where({gender: request.queryParams.gender});

    } else {
      users = schema.users.where({gender: request.queryParams.gender, language: request.queryParams.language});
    }

    return users;

  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
