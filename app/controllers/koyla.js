import Ember from 'ember';
import { ensurePromise } from '../utils/ensurePromise';

export default Ember.Controller.extend({

  langTranslateFrom: 'English',
  english:true,

  actions: {
    filterByWord(param) {
      // Check the first letter of the input param and get the data from serever. Don't reload data from server anymore.
      if (param !== '' && param.length < 2) {
        return this.get('store').query('word',{ letter:param });
      }
      // When input param is more than one letter, peeek all the words from Ember store with first letter as in input param.
      // Check second and all the following letters to be equal to those strings that in Ember store.
      else if (param !== '' && param.length >= 2) {

          let search = this.store.peekAll('word');
          
          let filtered = search.filter(function(i) {
            return i.get("word").toLowerCase().indexOf(param.toLowerCase()) !== -1;
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
    filterByLa(param) {
      // Check the first letter of the input param and get the data from serever. Don't reload data from server anymore.
      if (param !== '' && param.length < 2) {
        return this.get('store').query('la',{ letter:param });
      }
      // When input param is more than one letter, peeek all the words from Ember store with first letter as in input param.
      // Check second and all the following letters to be equal to those strings that in Ember store.
      else if (param !== '' && param.length >= 2) {

          let search = this.store.peekAll('la');
          
          let filtered = search.filter(function(i) {
            return i.get("la").toLowerCase().indexOf(param.toLowerCase()) !== -1;
          });
                  
          if (search.get('length') >= 1000)
          {
            this.store.unloadAll();
          }
          // store.peekAll() returns Ember.enumerable class object, not a promise. Make it to be promise.
          return ensurePromise(filtered);
      } 
      else {
        return this.get('store').query('la',{letter:"a"});
      }
    },
    changeLanguage_onClick () {
      this.setProperties({langTranslateFrom: this.langTranslateFrom === 'English' ? 'Mela' : 'English'});
      this.setProperties({english: this.langTranslateFrom === 'English' ? true : false});
    }
  }
});
