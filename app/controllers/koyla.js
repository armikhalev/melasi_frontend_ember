import Ember from 'ember';
import { ensurePromise } from '../utils/ensurePromise';

export default Ember.Controller.extend({

  langTranslateFrom: 'English',
  langTranslateTo: 'Mela',
  english:true,
  settings: Ember.computed('english', function(){
      let settings = {};

      // Check which is the current language and change settings accordingly
      if (this.get('english') === true) {
        settings.letters = 'firstLetters';
        settings.modelQuery = 'word';
      }
      else
      {
        settings.letters = 'gesewlaLiki';
        settings.modelQuery = 'la';
      }
     return settings;
  }),
  firstLetters:[],
  gesewlaLiki:[],

  actions: {
    filterByWord(param) {
        let _letters = this.get('settings').letters;
        let _modelQuery = this.get('settings').modelQuery;

        // Check if the param letter was previously used if yes then don't call backend, peek data from local ember store
        if  ( (param !== "") && (this.get(_letters).lastIndexOf(param) === -1) ) {             
          this.get(_letters).pushObject(param);
          return this.store.query(_modelQuery,{ letter:param });
        }
        else if (this.get(_letters).lastIndexOf(param) !== -1) {
          let search = this.store.peekAll(_modelQuery);
          
          let filtered = search.filter(function(i) {
            return i.get(_modelQuery).toLowerCase().indexOf(param.toLowerCase()) !== -1;
          });
          
          if (search.get('length') >= 1000)
          {
            this.store.unloadAll();
          }
          // store.peekAll() returns Ember.enumerable class object, not a promise. Make it to be promise.
          return ensurePromise(filtered);
        } 
        else {
          return this.get('store').query('word',{letter:"a"});
        }
    },
    changeLanguage_onClick () {
      this.setProperties({langTranslateFrom: this.langTranslateFrom === 'English' ? 'Mela' : 'English'});
      this.setProperties({langTranslateTo: this.langTranslateTo === 'Mela' ? 'English' : 'Mela'});
      this.setProperties({english: this.langTranslateFrom === 'English' ? true : false});
    }
  }
});
