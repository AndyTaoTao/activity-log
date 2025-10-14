// src/__tests__/unit/index.test.js

function add(a, b) {
  return a + b;
}

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers correctly', () => {
  expect(add(-1, -2)).toBe(-3);
});
