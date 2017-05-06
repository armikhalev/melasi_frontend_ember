import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

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
    }
  }

});
