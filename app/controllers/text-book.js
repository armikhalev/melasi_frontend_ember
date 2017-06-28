import Ember from 'ember';

export default Ember.Controller.extend({

    grammarCards: Ember.computed('model', function(){
        let _cardCategories = {};
        
        this.get('model').forEach((card) => { 
            let cat = Ember.get(card, 'category');
            if(!_cardCategories[cat]) {
                _cardCategories[cat] = [];
            }
            _cardCategories[cat].push(card);
        });

        const orderedCategories = {};
        Object.keys(_cardCategories).sort().forEach(function(key) {
            orderedCategories[key] = _cardCategories[key];
        });

        return orderedCategories;
    })
});
