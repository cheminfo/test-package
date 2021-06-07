/**
 * Returns a very important number
 * @returns {number}
 */
export default function theDefaultExport() {
  return 42;
}

/**
 * Value that can be incremented
 * @type {number}
 */
export let value = 0;

/**
 * Increments the value by one.
 */
export function incrementValue() {
  value++;
}

export function feature() {
  return 'cool feature';
}

export function something() {
  return 'something';
}
