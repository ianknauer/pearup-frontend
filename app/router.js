import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function(){
    this.route('messages');
  });
  this.route('interests', { path: "/" });
  this.route('profile', {path: "/profile"});
});

export default Router;
