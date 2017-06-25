import Ember from 'ember';

export default Ember.Controller.extend({
    grammarCard: Ember.computed.alias('model')
});
