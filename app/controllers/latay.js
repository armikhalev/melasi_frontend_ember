import Ember from 'ember';

export default Ember.Controller.extend({
    cards: Ember.computed.alias('model')
});
