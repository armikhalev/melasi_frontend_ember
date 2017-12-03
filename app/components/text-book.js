import Ember from 'ember';

export default Ember.Component.extend({
    isShowing: false,
    actions : {
        hideText() {
            this.set('isShowing', false);
        },
        showText() {
            this.set('isShowing', true);
        }
    }
});
