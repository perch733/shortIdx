
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { ShuffleX, ShortIdx, RandomIdx, PasswordGen } from '../src/index.ts';

describe('npm-shortidx Tests', () => {

  it('ShuffleX should shuffle array without mutation', () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const copy = [...original];
    const shuffled = ShuffleX(original);
    
    // Note: There is a tiny chance shuffled equals original, but with 10 elements it's 1/10!
    assert.notDeepStrictEqual(shuffled, original, 'Should be shuffled');
    assert.deepStrictEqual(original, copy, 'Original array should not be mutated');
    assert.strictEqual(shuffled.length, original.length);
    // Sort both to verify content matches
    const sortedOriginal = [...original].sort();
    const sortedShuffled = [...shuffled].sort();
    assert.deepStrictEqual(sortedShuffled, sortedOriginal, 'Should contain same elements');
  });

  it('ShortIdx should generate ID of specified length', () => {
    const id = ShortIdx(10);
    assert.strictEqual(id.length, 10);
  });

  it('ShortIdx should verify character set', () => {
      const id = ShortIdx(100);
      const allowed = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
      for (const char of id) {
          assert.ok(allowed.includes(char), `Invalid char: ${char}`);
      }
  });

  it('RandomIdx should generate ID', () => {
      const id = RandomIdx(8);
      assert.strictEqual(id.length, 8);
  });

  it('ShuffleX should respect limit and perform partial shuffle', () => {
    const original = Array.from({ length: 100 }, (_, i) => i);
    const limit = 5;
    const shuffled = ShuffleX(original, limit);
    
    assert.strictEqual(shuffled.length, limit);
    // Ensure all elements are from original
    for (const item of shuffled) {
      assert.ok(original.includes(item));
    }
    // Ensure uniqueness if original had unique items (it does)
    const set = new Set(shuffled);
    assert.strictEqual(set.size, limit);
  });

  it('ShuffleX should handle empty array and zero limit', () => {
    assert.deepStrictEqual(ShuffleX([], 5), []);
    assert.deepStrictEqual(ShuffleX([1, 2, 3], 0), []);
  });

  it('PasswordGen should work with refactored generateId', () => {
      const pass = PasswordGen({ length: 20, chars: 'AB', extraChars: 'C' });
      assert.strictEqual(pass.length, 20);
      for (const char of pass) {
          assert.ok('ABC'.includes(char));
      }
      // Check that it throws on invalid input (delegated to generateId)
      assert.throws(() => PasswordGen({ chars: 'A' }), /charset/);
  });
});
