import test, { value, incrementValue } from 'cheminfo-tools-test';

describe('testing the module', () => {
  it('should return 42', () => {
    expect(test()).toBe(42);
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
