import Ember from 'ember';

export function ensurePromise(x) {
      return new Ember.RSVP.Promise(function(resolve) {
          resolve(x);
      });
  }

export default { 
    ensurePromise: ensurePromise
};