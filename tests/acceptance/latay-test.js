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
        assert.equal(find('.flipContainer').length, 5, 'should show five cards');
    });
});

test('Cards are clickable', function (assert) {
    click('.flipContainer:first');
    andThen(function() {
        assert.ok(find('.flipContainer:first').hasClass('flip'), 'should add class flip to flip a card');
    });
});
