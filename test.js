const assert = require('assert');
const sum = require('./src/index.js');

it('should return 0 if no params', () => {
  assert.equal(sum(), 0);
});

it('should return 5', () => {
  assert.equal(sum(2)(3)(), 5);
});

it('should return 100', () => {
  assert.equal(sum(10)(10)(10)(10)(10)(10)(10)(10)(10)(10)(), 100);
});

it('should return 15', () => {
  assert.equal(sum(1)(2)(3)(4)(5)(), 15);
});

it('should return 16', () => {
  assert.equal(sum(1, 2)(3, 4, 6)(), 16);
});

it('should return 16', () => {
  assert.equal(sum(1, 2, 3, 4, 6)(), 16);
});

it('should return 20', () => {
  assert.equal(sum(1, 1)(2, 2)(3, 3)(4, 4, 4)(), 24);
});
