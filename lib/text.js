// creating the font class
class Font {
  constructor(text) {
    if (typeof text === 'string' && text.length <= 3) {
      this.text = text;
    } else {
      throw new Error('Text must be maximum length of 3 characters.');
    }
  }

  setText(text) {
    if (typeof text === 'string' && text.length <= 3) {
      this.text = text;
    } else {
      throw new Error('Text must be 3 characters.');
    }
  }

  getText() {
    return this.text;
  }
}

// Example usage:
const font = new Font('ABC');
console.log("Text:", font.getText()); 

font.setText('XYZ');
console.log("Updated Text:", font.getText()); 

// Throws an error
try {
  font.setText('TooLong');
} catch (error) {
  console.error(error.message); 
}

  module.exports = { Font };