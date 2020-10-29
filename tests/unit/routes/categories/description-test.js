import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | categories/description', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:categories/description');
    assert.ok(route);
  });
});
