import Ember from 'ember';

export default Ember.Component.extend({
  value: '',
  settings: Ember.computed('english_cur', function(){
      let settings = {};
      // Check which is the current language and change settings accordingly
      if (this.get('english_cur') === true) {
        settings.source_language = 'English';
        settings.target_language = 'Mela';
        settings.input_placeholder = 'Type any English word to translate';
        settings.button_change = 'Switch to Mela';
      }
      else {
        settings.source_language = 'Mela';
        settings.target_language = 'Engila';
        settings.input_placeholder = 'Ta sayla e la day lapey'
        settings.button_change = 'Ali tu Engila';
      }
      return settings;
  }),
  init() {
    this._super(...arguments);
    let filterInputValue = this.get('value');
    this.get('filter')(filterInputValue).then((results) => this.set('results', results));
  },
  // This hook is updating results of the search on browser back button click
  didUpdateAttrs() {
    this._super(...arguments);
    let filterInputValue = this.get('value');
    this.get('filter')(filterInputValue).then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    },
    changeLanguage_onClick () {
      this.set('english_cur', !this.get('english_cur') );
      this.$('input').focus();
    }
  }

});
