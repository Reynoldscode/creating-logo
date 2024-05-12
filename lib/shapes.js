// Define the Shape class
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color){
    this.color = (color);
  }
}

// Triangle class extending Shape
class Triangle extends Shape {
  render() {
    return `
    <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>
    `;
  }
}

// Circle class extending Shape
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    `;
  }
}

// Square class extending Shape
class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"/>
    `;
  }
};

module.exports = { Triangle, Circle, Square };