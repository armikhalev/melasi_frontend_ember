import { test } from 'qunit';
import moduleForAcceptance from 'melasi-frontend-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | koyla', {
        beforeEach: function() {
            visit('/koyla');
        }
    }
);

test('Typing "ab" in input should show words starting with "ab-" ', function (assert) {
    fillIn('input.word-filter-input', 'ab');
    keyEvent('input.word-filter-input', 'keyup', 69);

    andThen(function() {
        assert.equal(find('ul.koyla-result-ul li:first').text(), 'English: abacus', 'should show word abacus');
    });
});

test('Clicking on "Change language" button should switch headers', function (assert) {
    click('button.koyla-change-button');
    andThen(function() {
        assert.equal(find('label.koyla-source-label').text(), 'Mela', 'Should show Mela header');
        assert.equal(find('label.koyla-target-label').text(), 'Engila', 'Should show English header');
    });
});

test('When first language header is "Mela", third header in result is "Dasayna"', function (assert) {   
    click('button.koyla-change-button');
    andThen(function() {
        assert.equal(find('label.koyla-source-label').text(), 'Mela', 'Should show Mela header');
        assert.equal(find('ul.koyla-result-ul li:nth-child(3)').text().slice(0,7), 'Dasayna', 'should show word "Dasayna"');
    });     
});


test('Going to url with specified query parameters should show the searched word both in the input and in the result', function (assert) {   
    visit('/koyla?search=vodka');
    andThen(function() {
        assert.equal(find('ul.koyla-result-ul li:nth-child(1)').text().slice(9), 'vodka', 'should show word "vodka"');
    });     
});

test('Going to url with specified query parameters which contain change of the koyla-result-ul direction should show the correct language output', function (assert) {   
    visit('/koyla?english_cur=false&search=fu');
    andThen(function() {
        assert.equal(find('ul.koyla-result-ul li:nth-child(1)').text().slice(6), 'fu', 'should show word "fu"');
    });     
});