import { test } from 'qunit';
import moduleForAcceptance from 'melasi-frontend-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navbar');

test('visiting /, should show koyla as the home page', function (assert) {
  visit('/');
  
  click('a:contains("Koyla")');
  andThen(function() {
    assert.equal(currentURL(), '/koyla', 'should navigate to koyla page');
  });
});

test('visiting /latay, should show latay page', function (assert) {
  visit('/');
  click('a:contains("Latay")');

  andThen(function() {
    assert.equal(currentURL(), '/latay', 'should navigate to latay page');
  });
});
