const { add, subtract, addAndSubtract } = require('./tasks');

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('addAndSubtract', () => {
  expect(addAndSubtract(4, 2, 1)).toBe(5);
});