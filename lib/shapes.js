
class Shapes {
  constructor(square, triangle, circle){
    this.size = square;
    this.logoShape2 = triangle;
    this.logoShape3 = circle;
  }
  drawShape(){
    
  }
}

const user = new CreateLogo("square", "triangle", "circle")
user.createShape();


  module.exports = {
    Shapes
  }