import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Latay',
    model(){
        return this.store.findAll('card', {reload:false});
    },
    actions: {
        flipCard (_card) {
            console.log(_card.data.flip);
            Ember.set(_card.data, 'flip', !_card.data.flip)
        }
    }
});