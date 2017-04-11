import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it renders correctly displaying names of the links', function(assert) {

  this.set("urls",[
    {
      name: 'Latay',
      path: 'latay'
    },
    {
      name: 'Koyla',
      path: 'koyla'
    }
  ]);
      
  this.render(hbs`{{nav-bar urls=urls}}`);

  assert.equal(this.$('ul li a:first').text(), 'Latay');
  assert.equal(this.$('ul li a:last').text(), 'Koyla');

});
