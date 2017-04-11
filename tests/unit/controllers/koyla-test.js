import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:koyla', 'Unit | Controller | koyla', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

let words = [
  Ember.Object.create({ word: 'wife', la: 'feyleya', comment:'comment' }), 
  Ember.Object.create({ word: 'wi', la: 'fey', comment:'comment' })];

let model = Ember.ArrayProxy.create({
  content: Ember.A(words)
});

// Replace this with your real tests.
test('it returns filtered words', function(assert) {
  let controller = this.subject();
  controller.set('model', model);
  controller.send('changeLanguage_onClick');
  
  assert.equal(controller.get('langTranslateFrom'), "Mela","should show Mela");
});
