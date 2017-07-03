import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('koyla', {path: '/koyla'});
  this.route('latay', {path: '/latay'});
  this.route('intro', {path: '/'});
  this.route('text-book', function() {});
});

export default Router;
