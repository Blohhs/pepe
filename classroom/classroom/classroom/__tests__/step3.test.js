import { describe, it } from 'node:test';
import { strict as assert } from 'assert';
import { data } from '../src/data.js';
import { mapToNames, mapToPriceWithTax } from '../src/mappers.js';

describe('step3', () => {
  it('mapToNames returns array of names', () => {
    const names = mapToNames(data);
    const expected = data.map((d) => d.name);
    assert.deepEqual(names, expected);
  });

  it('mapToPriceWithTax returns new objects with taxed prices and does not mutate original', () => {
    const tax = 0.2;
    const before = JSON.parse(JSON.stringify(data));
    const taxed = mapToPriceWithTax(tax)(data);
    assert.deepEqual(data, before);
    const expected = data.map((d) => ({ ...d, price: +((d.price || 0) * (1 + tax)).toFixed(2) }));
    assert.deepEqual(taxed, expected);
  });
});
