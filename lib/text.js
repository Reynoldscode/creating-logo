class Font {
  constructor(text) {
    if (typeof text !== 'string') {
      throw new Error('Text must be provided as a string.');
    }
    if (text.length > 3) {
      throw new Error('Text must be maximum length of 3 characters.');
    }
    this.text = text;
  }

  setText(text) {
    if (typeof text !== 'string') {
      throw new Error('Text must be provided as a string.');
    }
    if (text.length > 3) {
      throw new Error('Text must be maximum length of 3 characters.');
    }
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

module.exports = { Font };