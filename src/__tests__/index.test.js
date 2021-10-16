import testLib, { value, incrementValue } from '../index.js';

describe('testing the module', () => {
  it('should return 42', () => {
    expect(testLib()).toBe(42);
  });
  it('should increment', () => {
    expect(value).toBe(0);
    incrementValue();
    expect(value).toBe(1);
    incrementValue();
    incrementValue();
    expect(value).toBe(3);
  });
});
