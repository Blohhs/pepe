import { describe, it } from 'node:test';
import { strict as assert } from 'assert';
import { data } from '../src/data.js';
import { filterByCategory, filterInStock } from '../src/filters.js';

describe('step2', () => {
  it('filterByCategory returns only matching category', () => {
    const electronics = filterByCategory('Electronics')(data);
    assert.ok(electronics.length > 0);
    for (const it of electronics) assert.equal(it.category, 'Electronics');
  });

  it('filterInStock returns only items with inStock === true', () => {
    const inStock = filterInStock(data);
    assert.ok(inStock.length > 0);
    for (const it of inStock) assert.equal(it.inStock, true);
    assert.equal(inStock.some((i) => i.inStock === false), false);
  });
});
