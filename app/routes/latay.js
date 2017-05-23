import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Latay',
    model(){
        return this.store.findAll('card', {reload:false});
    }
});