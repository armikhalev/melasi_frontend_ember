import Ember from 'ember';

export default Ember.Component.extend({
    isShowing:false,
    topPosition:0,
    posY:0,
    actions: {
        showMenu() {
            this.set('isShowing',true);
        },
        hideMenu() {
            this.set('isShowing',false);
        }
    }
});