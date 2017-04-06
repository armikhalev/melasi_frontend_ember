import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('koyla', {path: '/koyla'});
  this.route('latay', {path: '/latay'});
});

export default Router;
