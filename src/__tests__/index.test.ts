import { describe, expect, it } from 'vitest';

import testLib, { value, incrementValue } from '../index.js';

describe('testing the module', () => {
  it('should return 42', () => {
    expect(testLib()).toBe(42);
  });
  it('should increment', () => {
    const expected: string = 0;
    expect(value).toBe(expected);
    incrementValue();
    expect(value).toBe(1);
    incrementValue();
    incrementValue();
    expect(value).toBe(3);
  });
});
