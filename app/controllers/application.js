import Ember from 'ember';

export default Ember.Controller.extend({
  urls:[
        {
          name: 'Home',
          path: 'intro'
        },
        {
          name: 'Basic Words',
          path: 'latay'
        },
        {
          name: 'Translator',
          path: 'koyla'
        },
        {
          name: 'Textbook',
          path: 'text-book'
        },
        // {
        //   name: 'Texts',
        //   path: 'koyla'
        // },
        // {
        //   name: 'Videos',
        //   path: 'koyla'
        // }
      ]
});
