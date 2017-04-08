import { test } from 'qunit';
import moduleForAcceptance from 'melasi-frontend-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | koyla', {
        beforeEach: function() {
            visit('/koyla');
        }
    }
);

test('Typing "ab" in input should show words starting with "ab-" ', function (assert) {
    fillIn('input', 'ab');
    andThen(function() {
        assert.equal(find('ul.translationDiv li:first').text(), 'abacus', 'should show word abacus');
    });
});

test('Clicking on "Change language" button should switch headers', function (assert) {

});

test('When first language header is "English", third header in result is "Notes"', function (assert) {

});

test('When first language header is "Mela", third header in result is "Dasayna"', function (assert) {

});