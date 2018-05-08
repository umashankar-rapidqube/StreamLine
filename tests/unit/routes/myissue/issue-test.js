import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myissue/issue', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:myissue/issue');
    assert.ok(route);
  });
});
