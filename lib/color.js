

class Colors {
  constructor(blue, red, green){
    this.logoColor1 = blue;
    this.logoColor2 = red;
    this.logoColor3 = green;
  }
  getHexCode(){
    console.log(`shape ${this.logoColor1}was created`);
  }
  getRGB(){
    console.log(`shape ${this.logoColor1}was created`);
  }
}

const user = new CreateLogo("blue", "red", "green")
user.createShape();

  module.exports = {
    Colors
  }