
const { Color } = require('../color');


describe('Color', () => {
  describe('Valid color formats', () => {
    test('Constructor should initialize color correctly', () => {
      const color = new Color('#ff0000');
      expect(color.getHex()).toBe('#FF0000');
      expect(color.getRgb()).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('setColor should update color correctly', () => {
      const color = new Color('blue');
      color.setColor('rgb(0, 255, 0)');
      expect(color.getHex()).toBe('#00FF00');
      expect(color.getRgb()).toEqual({ r: 0, g: 255, b: 0 });
    });
  });

  describe('Invalid color formats', () => {
    test('Constructor should throw error for invalid format', () => {
      expect(() => new Color('invalid')).toThrow('Color must be provided as a string.');
    });

    test('setColor should throw error for invalid format', () => {
      const color = new Color('#0000FF');
      expect(() => color.setColor(123)).toThrow(' Color must be provided as a string.');
    });
  });
});