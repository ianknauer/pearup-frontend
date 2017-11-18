import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function(){;
    this.route('messages');
  });

  this.route('events', function(){});

  this.route('profile', {path: "/profile"}, function(){
    this.route('edit', {});
  });

  this.route('login');
  this.route('sign-up');
});

export default Router;
