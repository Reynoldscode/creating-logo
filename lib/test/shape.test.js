const {Triangle, Circle, Square } = require("../shapes");

// Triangle Shape
describe('Triangle', () => {
  test('renders correctly', () => {
    const shape = new Triangle();
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toMatch(/^\s*<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"\/>\s*$/);
  });
});

// Circle Shape
describe('Circle', () => {
  test('renders correctly', () => {
    const shape = new Circle();
    const color = 'yellow';
    shape.setColor(color);
    expect(shape.render()).toMatch(/^<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow"\/>\s*$/);
  });
});

// Square Shape
describe('Square', () => {
  test('renders correctly', () => {
    const shape = new Square();
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toMatch(/^<rect x="50" height="200" width="200" fill="blue"\/>\s*$/);
  });
});