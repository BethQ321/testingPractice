import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from './script.js';

// test capitalize function
test('jim to Jim', () => {
  expect(capitalize("jim")).toMatch("Jim");
});

test('mary to Mary', () => {
  expect(capitalize("mary")).toMatch("Mary");
});

test('ALEX to ALEX', () => {
  expect(capitalize("ALEX")).toMatch("ALEX");
});

// test reverse function
test('Jim to miJ', () => {
  expect(reverse("Jim")).toMatch("miJ");
});

test('Mary to yraM', () => {
  expect(reverse("Mary")).toMatch("yraM");
});

test('$354 to 453$', () => {
  expect(reverse("$354")).toMatch("453$");
});

// test calculator object
test('add 1 + 2 to get 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 1 - 2 to get -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiply 1 * 2 to get 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('divide 12 / 3 to get 4', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

// test caesarCipher
test('input "xyz" and 3 should return "abc"', () => {
  expect(caesarCipher('xyz', 3)).toMatch('abc');
});

test('input "HeLLo" and 3 should return "KhOOr"', () => {
  expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
});

test('input "Hello, World!" and 3 should return "Khoor, Zruog!"', () => {
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});

// test analyzeArray
test('input array [1,8,3,4,2,6] returns obj = {ave: 4, min: 1, max: 8, length: 6}', () => {
  const testArr1 = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(testArr1)).toEqual({ave: 4, min: 1, max: 8, length: 6});
});

test('input array [7, 9, 4, 3] returns obj = {ave: 5.75, min: 3, max: 9, length: 4}', () => {
  const testArr2 = [7, 9, 4, 3];
  expect(analyzeArray(testArr2)).toEqual({ave: 5.75, min: 3, max: 9, length: 4});
});

test('input array [8, 8, 8] returns obj = {ave: 8, min: 8, max: 8, length: 3}', () => {
  const testArr3 = [8, 8, 8];
  expect(analyzeArray(testArr3)).toEqual({ave: 8, min: 8, max: 8, length: 3});
});

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });