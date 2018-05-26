import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | issue', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:issue');
    assert.ok(controller);
  });
});
