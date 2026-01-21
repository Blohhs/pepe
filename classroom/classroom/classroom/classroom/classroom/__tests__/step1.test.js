import { describe, it } from 'node:test';
import { strict as assert } from 'assert';
import { pipe } from '../src/pipeline.js';

describe('step1', () => {
  it('pipe composes functions left-to-right and is pure', () => {
    const add = (x) => x + 1;
    const mul = (x) => x * 2;
    const fn = pipe(add, mul);
    assert.equal(fn(2), 6);

    const arr = [1];
    const pushTwo = (a) => [...a, 2];
    const identity = (a) => a;
    const out = pipe(pushTwo, identity)(arr);
    assert.deepEqual(arr, [1]);
    assert.deepEqual(out, [1, 2]);
  });
});
