import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Koyla', 
    afterModel() {
        return this.store.findAll('grammar-card');
    }
});
