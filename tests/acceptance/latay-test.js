import { test } from 'qunit';
import moduleForAcceptance from 'melasi-frontend-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | latay', {
        beforeEach: function() {
            visit('/latay');
        }
    }
);

test('Page contains five cards', function (assert) {
    andThen(function() {
        assert.equal(find('.latay-flip-container').length, 142, 'should show 142 cards');
    });
});

test('Cards are clickable', function (assert) {
    click('.latay-flip-container:first');
    andThen(function() {
        assert.ok(find('.latay-flip-container:first').hasClass('latay-flip'), 'should add class flip to flip a card');
    });
});
