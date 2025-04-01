// app.js
const triangleType = require('./triangle');

const testCases = [
  { sides: [3, 3, 3], expected: 'Equilateral' },
  { sides: [3, 3, 4], expected: 'Isosceles' },
  { sides: [3, 4, 5], expected: 'Scalene' },
  { sides: [0, 1, 2], expected: 'Invalid' },
  { sides: [1, 1, 3], expected: 'Invalid' }
];

testCases.forEach((testCase, index) => {
  const [a, b, c] = testCase.sides;
  const result = triangleType(a, b, c);
  
  console.log(`Test Case ${index + 1}:`);
  console.log(`Sides: ${a}, ${b}, ${c}`);
  console.log(`Expected: ${testCase.expected}`);
  console.log(`Result: ${result}`);
  console.log(`Test ${result === testCase.expected ? 'PASSED' : 'FAILED'}`);
  console.log('---------------------');
});