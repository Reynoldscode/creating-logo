
const { Font } = require('../text');

describe('Font', () => {
  describe('Valid text length', () => {
    test('Constructor should initialize text correctly', () => {
      const font = new Font('ABC');
      expect(font.getText()).toBe('ABC');
    });

    test('setText should update text correctly', () => {
      const font = new Font('ABC');
      font.setText('XYZ');
      expect(font.getText()).toBe('XYZ');
    });
  });

  describe('Invalid text length', () => {
    test('Constructor should throw error for text exceeding maximum length', () => {
      expect(() => new Font('TooLong')).toThrow('Text must be maximum length of 3 characters.');
    });

    test('setText should throw error for text exceeding maximum length', () => {
      const font = new Font('ABC');
      expect(() => font.setText('TooLong')).toThrow('Text must be maximum length of 3 characters.');
    });
  });
});