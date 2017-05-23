import Ember from 'ember';
import { ensurePromise } from '../utils/ensurePromise';

export default Ember.Controller.extend({
    cards: Ember.computed.alias('model'),
    actions: {
        filterByWord(param) {
            if (param) {
                let _search = this.get('cards');
                let filtered = _search.filter(function(i) {
                    return i.get('front').toLowerCase().indexOf(param.toLowerCase()) !== -1;
                });

                // store.peekAll() returns Ember.enumerable class object, not a promise. Make it to be promise.
                return ensurePromise(filtered);
            }
            else {
                return this.store.findAll('card', {reload:false});
            }    
        },
        flipCard (_card) {
            Ember.set(_card, "flip",!_card.get("flip"));
        }
    }
});
