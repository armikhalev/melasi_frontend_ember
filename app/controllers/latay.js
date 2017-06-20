import Ember from 'ember';

export default Ember.Controller.extend({
    cards: Ember.computed.alias('model'),
    textOpen: false,
    clickedCard:"",
    actions: {
        filterByWord(param) {
            if (param) {
                let _search = this.get('cards');
                let filtered = _search.filter(function(i) {
                    return i.get('front').toLowerCase().indexOf(param.toLowerCase()) !== -1;
                });

               return filtered;
            }
            else {
                return this.store.findAll('card', {reload:false});
            }    
        },
        flipCard(_card) {
            Ember.set(_card, "flip",!_card.get("flip"));
        },
        flipAllCards_onClick() {
            let that = this; 
            let cards = this.get('cards');

            cards.forEach(function(_item){
                that.send('flipCard',_item);
            });
        },
        allCardsFront_onClick() {
            let cards = this.get('cards');

            cards.forEach(function(_item){
                Ember.set(_item, "flip",false);
            });
        },
        showTextBook(card) {
            this.setProperties({textOpen: true});
            this.setProperties({clickedCard: card});
        },
        hideTextBook() {
            this.setProperties({textOpen: false});
        }
    }
});
