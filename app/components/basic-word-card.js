import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['b-w-card-flip-container'],
    didInsertElement() {
        this._super(...arguments);
    },
    actions: {
        flipCard(_card) {
            this.flipBasicWordCard(_card);
        },
        show(_card) {
            this.showTextBook(_card);
        }
    }
});
