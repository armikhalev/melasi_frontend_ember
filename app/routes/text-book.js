import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Text-book',
    model(){
        return this.store.findAll('grammar-card', {backgroundReload:false});
    },
});
