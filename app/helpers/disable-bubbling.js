import Ember from 'ember';

export function disableBubbling([action]) {
  return function(event) {
    event.stopPropagation();
    return action(event);
  };
}
export default Ember.Helper.helper(disableBubbling);
