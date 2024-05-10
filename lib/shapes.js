
// Triangle class
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
    this.color = new Color();
  }

  setColor(color) {
    this.color = color;
  }

  toSVG() {
    return `<polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="${this.color.getHex()}" />`;
  }
}

// Circle class
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.color = new Color();
  }

  setColor(color) {
    this.color = color;
  }

  toSVG() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color.getHex()}" />`;
  }
}

// Square class
class Square {
  constructor(side) {
    this.side = side;
    this.color = new Color();
  }

  setColor(color) {
    this.color = color;
  }

  toSVG() {
    return `<rect x="0" y="0" width="${this.side}" height="${this.side}" fill="${this.color.getHex()}" />`;
  }
}


// const triangle = new Triangle(5, 8);
// console.log("Area of Triangle:", triangle.calculateArea()); 

// const circle = new Circle(3);
// console.log("Area of Circle:", circle.calculateArea()); 

// const square = new Square(4);
// console.log("Area of Square:", square.calculateArea()); 

module.exports =  { Triangle, Circle, Square };