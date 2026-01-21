import { describe, it } from 'node:test';
import { strict as assert } from 'assert';
import { data } from '../src/data.js';
import { sumPrices, groupByCategory } from '../src/reducers.js';

describe('step4', () => {
  it('sumPrices sums numbers and item.price', () => {
    assert.equal(sumPrices([1, 2, 3]), 6);
    const expected = data.reduce((s, it) => s + (it.price || 0), 0);
    assert.equal(sumPrices(data), expected);
  });

  it('groupByCategory groups items by category', () => {
    const grouped = groupByCategory(data);
    assert.ok(typeof grouped === 'object');
    const electronics = data.filter((d) => d.category === 'Electronics');
    assert.deepEqual(grouped['Electronics'].map((i) => i.id).sort(), electronics.map((i) => i.id).sort());
  });
});
