import { describe, it } from 'node:test';
import { strict as assert } from 'assert';
import { data } from '../src/data.js';
import {
  sortByPriceAsc,
  sortByPriceDesc,
  inStockNamesSortedAsc,
  electronicsWithTaxDesc,
  priceWithTaxGroupedByCategory,
  sumInStockPrices,
} from '../src/processors.js';

describe('step5', () => {
  it('sortByPriceAsc/Desc return new sorted arrays and do not mutate original', () => {
    const copy = JSON.parse(JSON.stringify(data));
    const asc = sortByPriceAsc(data);
    const desc = sortByPriceDesc(data);
    assert.deepEqual(data, copy);
    for (let i = 1; i < asc.length; i++) assert.ok(asc[i].price >= asc[i - 1].price);
    for (let i = 1; i < desc.length; i++) assert.ok(desc[i].price <= desc[i - 1].price);
  });

  it('inStockNamesSortedAsc returns names of in-stock items sorted by price asc', () => {
    const expected = data
      .filter((d) => d.inStock)
      .slice()
      .sort((a, b) => a.price - b.price)
      .map((d) => d.name);
    assert.deepEqual(inStockNamesSortedAsc(data), expected);
  });

  it('electronicsWithTaxDesc applies tax and sorts desc', () => {
    const out = electronicsWithTaxDesc(data);
    assert.ok(Array.isArray(out));
    for (const it of out) assert.equal(it.category, 'Electronics');
    for (let i = 1; i < out.length; i++) assert.ok(out[i].price <= out[i - 1].price);
  });

  it('priceWithTaxGroupedByCategory groups taxed products', () => {
    const out = priceWithTaxGroupedByCategory(data);
    assert.ok(out['Electronics']);
    assert.ok(out['Books']);
  });

  it('sumInStockPrices equals manual sum of in-stock prices', () => {
    const expected = data.filter((d) => d.inStock).reduce((s, d) => s + d.price, 0);
    assert.equal(sumInStockPrices(data), expected);
  });
});
