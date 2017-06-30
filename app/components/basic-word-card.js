import Ember from 'ember';

export default Ember.Component.extend({   
    classNames: ['b-w-card-flip-container'],   
    // didInsertElement() {
    //     this._super(...arguments);

    //     var times = 5;
    //     while (times--) {
    //         this.$('.b-w-card-flipper').addClass('b-w-card-flip');
    //         this.$('.b-w-card-flipper').removeClass('b-w-card-flip');
    //     }
    // },
    actions: {
        flipCard(_card) {
            this.flipBasicWordCard(_card);
        },
        show(_card) {
            this.showTextBook(_card);
        }
    }
});
