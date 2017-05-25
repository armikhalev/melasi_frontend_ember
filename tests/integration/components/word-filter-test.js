import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import RSVP from 'rsvp';
import wait from 'ember-test-helpers/wait';

const WORDS = [
  {word:"wife", la: "feyleya", comment: "good comment"},
  {word:"wi", la: "fe", comment: "good comment"},
  {word:"wifi", la: "foo", comment: "good comment"},
  {word:"boo", la: "fey", comment: "good comment"}
];

const W_WORDS = [
  {word:"wife", la: "feyleya", comment: "good comment"},
  {word:"wi", la: "fe", comment: "good comment"},
  {word:"wifi", la: "foo", comment: "good comment"},
  {word:"boo", la: "fey", comment: "good comment"}
];

const FILTERED_WORDS = [
  {word:"wife", la: "feyleya", comment: "good comment"},
  {word:"wifi", la: "foo", comment: "good comment"}
];

moduleForComponent('word-filter', 'Integration | Component | word filter', {
  integration: true,
  beforeEach: function() {
      this.on('filterByWord', (param) => {
        if (param !== '' && param.length < 2) {
          return RSVP.resolve(W_WORDS);
        }
        else if (param !== '' && param.length >= 2) {
          return RSVP.resolve(FILTERED_WORDS);
        } 
        else {
          return RSVP.resolve(WORDS);
        }
    });

    this.render(hbs`      

      {{#word-filter
        filter=(action 'filterByWord')
        as |words|}}

          {{#each words as |w|}}
              <ul class="koyla-result-ul">
                  <li><b>English:</b> {{w.word}}</li>
                  <li><b>Mela:</b> {{w.la}}</li>
                  <li><b>Comment:</b> {{w.comment}}</li>
              
              </ul>
          {{/each}}
      {{/word-filter}}`);
    }
});

test('it shows words in order English to Mela', function(assert) {
  return wait().then(() => {
    assert.equal(this.$('ul.koyla-result-ul li:first').text().slice(0,13), "English: wife");
    assert.equal(this.$('ul.koyla-result-ul li:nth-child(2)').text().slice(0,13), 'Mela: feyleya');
  });
  
});

test('it takes input "wif" and shows all the words beginning with that', function(assert) {
  this.$('input.word-filter-input').val('wif').keyup();

  return wait().then(() => {
    assert.equal(this.$('ul.koyla-result-ul li:first').text(), "English: wife");
    assert.equal(this.$('ul.koyla-result-ul li:nth-child(2)').text().slice(0,13), "Mela: feyleya");

    assert.equal(this.$('ul.koyla-result-ul li:nth-child(1)').text().slice(13), "English: wifi");
    assert.equal(this.$('ul.koyla-result-ul li:nth-child(2)').text().slice(13), "Mela: foo");
  });

});
