import { test } from 'qunit';
import moduleForAcceptance from 'melasi-frontend-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navbar');

test('visiting /, should show the home page', function (assert) {
  visit('/');
  
  click('a:contains("Home")');
  andThen(function() {
    assert.equal(currentURL(), '/', 'should navigate to koyla page');
  });
});

test('visiting /latay, should show latay page', function (assert) {
  visit('/');
  click('a:contains("Basic Words")');

  andThen(function() {
    assert.equal(currentURL(), '/latay', 'should navigate to latay page');
  });
});
