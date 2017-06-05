import Ember from 'ember';

export default Ember.Component.extend({
    isShowing:false,
    actions: {
        showMenu() {
            this.set('isShowing',true);
        },
        hideMenu() {
            this.set('isShowing',false);
        }
    }
});