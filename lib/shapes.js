

// Define Triangle class
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  // Method to calculate area of Triangle
  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

// Define Circle class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Method to calculate area of Circle
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Define Square class
class Square {
  constructor(side) {
    this.side = side;
  }

  // Method to calculate area of Square
  calculateArea() {
    return this.side * this.side;
  }
}

// Example usage:
const triangle = new Triangle(5, 8);
console.log("Area of Triangle:", triangle.calculateArea()); 

const circle = new Circle(3);
console.log("Area of Circle:", circle.calculateArea()); 

const square = new Square(4);
console.log("Area of Square:", square.calculateArea()); 

module.exports = { Shape };