import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | streamline', function(hooks) {
  setupApplicationTest(hooks);

  test('should show login as home page', async function(assert){
      await visit('/');
      assert.equal(currentURL(), '/login');  
  });
 
});
