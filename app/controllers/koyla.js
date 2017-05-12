import Ember from 'ember';
import { ensurePromise } from '../utils/ensurePromise';

export default Ember.Controller.extend({
  queryParams:['search','english_cur'],
  search:"",
  english_cur:true,
  settings: Ember.computed('english_cur', function(){
      let settings = {};
      // Check which is the current language and change settings accordingly
      if (this.get('english_cur') === true) {
        settings.letters = 'firstLetters';
        settings.modelQuery = 'word';

        settings.source_language = 'English';
        settings.target_language = 'Mela';
        settings.input_placeholder = 'Type any English word to translate';
        settings.button_change = 'Change to Mela';

        settings.source_header = 'English';
        settings.target_header = 'Mela';
        settings.comment_header = 'Comment';
      }
      else {
        settings.letters = 'gesewlaLiki';
        settings.modelQuery = 'la';
        
        settings.source_language = 'Mela';
        settings.target_language = 'Engila';
        settings.input_placeholder = 'Ta sayla e la day lapey'
        settings.button_change = 'Ali tu Engila';

        settings.source_header = 'Mela';
        settings.target_header = 'Engila';
        settings.comment_header = 'Dasayna';
      }
      return settings;
  }),
  firstLetters:[],
  gesewlaLiki:[],

  actions: {
    filterByWord(param) {
        let _letters = this.get('settings').letters;
        let _modelQuery = this.get('settings').modelQuery;

        // Check if the param letter was previously used if not then call data from backend
        if  ( (param !== "") && (this.get(_letters).lastIndexOf(param) === -1) ) { 
          // Put the first letter typed to the local store to check afterwards if it has already the searched word locally            
          this.get(_letters).pushObject(param);

          return this.store.query(_modelQuery,{ letter:param });
        }
        // After typing > 1 letters, peek data from local ember store
        else if (this.get(_letters).lastIndexOf(param) !== -1) {
          let _search = this.store.peekAll(_modelQuery);
          
          let filtered = _search.filter(function(i) {
            return i.get(_modelQuery).toLowerCase().indexOf(param.toLowerCase()) !== -1;
          });

          // Unload local storage to prevent overusing it
          if (_search.get('length') >= 1000)
          {
            this.store.unloadAll();
            this.setProperties({firstLetters:[]});
            this.setProperties({gesewlaLiki:[]});
          }

          // store.peekAll() returns Ember.enumerable class object, not a promise. Make it to be promise.
          return ensurePromise(filtered);
        } 
        else {
          return this.get('store').query('word',{letter:"a"});
        }
    },
    changeLanguage_onClick () {
      this.setProperties({english_cur: !this.english_cur});
    }
  }
});
