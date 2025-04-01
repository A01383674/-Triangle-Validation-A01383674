// triangle/test/triangle.test.js
const triangleType = require('../triangle');

describe('triangleType function', () => {
  test('should return "Equilateral" when all sides are equal', () => {
    expect(triangleType(5, 5, 5)).toBe('Equilateral');
    expect(triangleType(10, 10, 10)).toBe('Equilateral');
  });

  test('should return "Isosceles" when exactly two sides are equal', () => {
    expect(triangleType(5, 5, 8)).toBe('Isosceles');
    expect(triangleType(7, 10, 7)).toBe('Isosceles');
    expect(triangleType(12, 8, 8)).toBe('Isosceles');
  });

  test('should return "Scalene" when all sides are different', () => {
    expect(triangleType(3, 4, 5)).toBe('Scalene');
    expect(triangleType(7, 10, 12)).toBe('Scalene');
  });

  test('should return "Invalid" when sides cannot form a triangle', () => {
    expect(triangleType(1, 1, 3)).toBe('Invalid');
    expect(triangleType(0, 4, 5)).toBe('Invalid');
    expect(triangleType(-2, 3, 4)).toBe('Invalid');
  });

  test('should return "Invalid" when any side is zero or negative', () => {
    expect(triangleType(0, 4, 5)).toBe('Invalid');
    expect(triangleType(-1, 2, 2)).toBe('Invalid');
    expect(triangleType(1, -1, 1)).toBe('Invalid');
  });

  test('should return "Invalid" when triangle inequality is violated', () => {
    expect(triangleType(1, 2, 4)).toBe('Invalid');
    expect(triangleType(5, 2, 2)).toBe('Invalid');
    expect(triangleType(7, 3, 3)).toBe('Invalid');
  });
});