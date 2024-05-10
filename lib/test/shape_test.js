
const { Triangle, Circle, Square } = require('../shapes');

// Test cases for Triangle class
describe('Triangle', () => {
  test('calculateArea should return the correct area', () => {
    const triangle = new Triangle(5, 8);
    expect(triangle.calculateArea()).toBe(20); 
  });
});

// Test cases for Circle class
describe('Circle', () => {
  test('calculateArea should return the correct area', () => {
    const circle = new Circle(3);
    expect(circle.calculateArea()).toBeCloseTo(28.274, 3); // Corrected expectation
  });
});

// Test cases for Square class
describe('Square', () => {
  test('calculateArea should return the correct area', () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16); 
  });
});
