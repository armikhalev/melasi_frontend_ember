import Ember from 'ember';

export default Ember.Controller.extend({
    sorting: ['category:asc'],
    grammarCard: Ember.computed.sort('model', 'sorting')
});
