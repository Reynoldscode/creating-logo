

class Color {
  constructor(color) {
    if (typeof color === 'string') {
      if (color.startsWith('#') && (color.length === 4 || color.length === 7)) {
        this.hex = color;
        this.rgb = this.hexToRgb(color);
      } else {
        this.rgb = this.parseRgb(color);
        this.hex = this.rgbToHex(this.rgb);
      }
    } else {
      throw new Error('Color must be provided as a string.');
    }
  }

  // Method to parse color string (supports color names and RGB strings)
  parseRgb(rgb) {
    const namedColors = {
      black: '#000000', fuchsia: '#ff00ff', green: '#008000',
      silver: '#c0c0c0', lime: '#00ff00',   olive: '#808000',
      gray: '#808080', yellow: '#ffff00', navy: '#000080',
      white: '#ffffff', blue: '#0000ff', teal: '#008080',
      maroon: '#800000', aqua: '#00ffff',  red: '#ff0000',
      purple: '#800080',
      
    };
// Already in hexadecimal format
    if (rgb.startsWith('#') && (rgb.length === 4 || rgb.length === 7)) {
      return rgb.toLowerCase(); 
    } else if (rgb.startsWith('rgb')) {
      const matches = rgb.match(/\d+/g);
      if (matches && matches.length === 3) {
        return this.rgbToHex({ r: parseInt(matches[0]), g: parseInt(matches[1]), b: parseInt(matches[2]) });
      } else {
        throw new Error('Invalid RGB color format.');
      }
    } else if (rgb.toLowerCase() in namedColors) {
      return namedColors[rgb.toLowerCase()];
    } else {
      throw new Error('Color must be provided as a hexadecimal string, RGB string, or color name.');
    }
  }

  // Method to convert RGB to hexadecimal
  rgbToHex({ r, g, b }) {
    return `#${(1 << 24) + (r << 16) + (g << 8) + b}`.slice(1).toUpperCase();
  }

  // Method to convert hexadecimal to RGB
  hexToRgb(hex) {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Method to set color
  setColor(color) {
    if (typeof color === 'string') {
      if (color.startsWith('#') && (color.length === 4 || color.length === 7)) {
        this.hex = color;
        this.rgb = this.hexToRgb(color);
      } else {
        this.rgb = this.parseRgb(color);
        this.hex = this.rgbToHex(this.rgb);
      }
    } else {
      throw new Error('Color must be provided as a string.');
    }
  }

  // Method to get RGB color
  getRgb() {
    return this.hexToRgb(this.hex);
  }

  // Method to get hexadecimal color
  getHex() {
    return this.hex;
  }
}


// const shapeColor = new Color('blue');
// console.log("Shape color in RGB:", shapeColor.getRgb()); 
// console.log("Shape color in Hex:", shapeColor.getHex()); 

// shapeColor.setColor('yellow');
// console.log("Updated Shape color in RGB:", shapeColor.getRgb()); 
// console.log("Updated Shape color in Hex:", shapeColor.getHex()); 

// const textColor = new Color('green');
// console.log("Text color in RGB:", textColor.getRgb()); 
// console.log("Text color in Hex:", textColor.getHex());

module.exports = { Color };