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

    this.render(hbs`      {{#word-filter
          filter=(action 'filterByWord')
          as |words|}}

          <div class="row">
            <label class="languageTranslateTo">Mela</label>
            <ul class="translation well well-lg list-unstyled">
              {{#each words as |w|}}
                <li><b>English:</b> {{w.word}}</li>
                <li><b>Mela:</b> {{w.la}}</li>
                <li><b>Notes:</b> {{w.comment}}</li>
                <li>.........................</li><br>
              {{/each}}
            </ul>
          </div>

        {{/word-filter}}`);
    }
});

test('it renders', function(assert) {
  return wait().then(() => {
    assert.equal(this.$('ul.translation li:first').text(), "English: wife");
    assert.equal(this.$('ul.translation li:nth-child(2)').text().trim(), 'Mela: feyleya');
  });
  
});

test('it renders', function(assert) {
  this.$('.wordToTranslate input').val('wif').keyup();

  return wait().then(() => {
    assert.equal(this.$('ul.translation li:first').text(), "English: wife");
    assert.equal(this.$('ul.translation li:nth-child(2)').text().trim(), 'Mela: feyleya');

    assert.equal(this.$('ul.translation li:nth-child(5)').text(), "English: wifi");
    assert.equal(this.$('ul.translation li:nth-child(6)').text().trim(), 'Mela: foo');
  });

});
