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

  this.route('profile', {path: "/profile"}, function(){
    this.route('edit', {});
  });

  this.route('events', function(){
    this.route('new');
    this.route('show', {path: "/:event_id"});
    this.route('edit', {path: "/:event_id/edit"});
  });

  this.route('login');
  this.route('sign-up');
  this.route('owner-events', function(){
    this.route('show', {path: "/:event_id"});
    this.route('edit', {path: "/:event_id/edit"});
  });
  this.route('participate-events', function(){
      this.route('show', {path: "/:event_id"});
  });
});

export default Router;
