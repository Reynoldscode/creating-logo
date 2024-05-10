const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes.js");
const { Font } = require("./lib/text.js");
const { Color } = require("./lib/color.js");


class SvgFile{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()
  }
}



//  user for input using Inquirer
const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter up to three letters you want on your logo:",
    },
    {
      type: "input",
      name: "textColour",
      message: "Enter the text color (hexadecimal format or color name):",
    },
    {
      type: "list",
      name: "shapeType",
      message: "Select a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      name: "shapeColour",
      message: "Enter the shape color (hexadecimal format or color name):",
    },
  ];

// Function to create SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error creating SVG:", err);
    } else {
      console.log("SVG file created successfully!");
    }
  });
}

// Function to write HTML file containing SVG image
function writeHTMLFile(fileName, svgData) {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logo Viewer</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/canvg/3.0.0-alpha.3/canvg.min.js"></script>
  </head>
  <body>
    <h1>Your Logo</h1>
    <div id="logo-container">
      ${svgData} <!-- Embed SVG content directly -->
    </div>
    <script src="script.js"></script>
  </body>
  </html>`;

  // Write HTML content to file
  fs.writeFile(fileName, htmlContent, (err) => {
    if (err) {
      console.log("Error creating HTML file:", err);
    } else {
      console.log("HTML file created successfully!");
    }
  });
}

// Function to initialize app
function init() {
  promptUser()
    .then((answers) => {
      let userShape;
      // Create the appropriate shape based on user input
      switch (answers.shapeType.toLowerCase()) {
        case "triangle":
          userShape = new Triangle();
          break;
        case "circle":
          userShape = new Circle();
          break;
        case "square":
          userShape = new Square();
          break;
        default:
          throw new Error("Invalid shape type!");
      }

      const userColor = new Color(answers.shapeColour);

      // Call methods to set color, text, etc.
      userShape.setColor(userColor);

      // Generate SVG data
      const svgData = generateSVG(userShape);

      // Write SVG data to SVG file
      const svgFileName = "logo.svg";
      writeToFile(svgFileName, svgData);

      // Generate SVG data and write to HTML file
      const htmlFileName = "logo.html";
      writeHTMLFile(htmlFileName, svgData);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// Function to generate SVG from shape object
function generateSVG(shape) {
  if (shape instanceof Triangle) {
    // Logic to generate SVG for a triangle
    return `<polygon points="0,0 ${shape.base},0 ${shape.base / 2},${shape.height}" fill="${shape.color.getHex()}" />`;
  } else if (shape instanceof Circle) {
    // Logic to generate SVG for a circle
    const diameter = shape.radius * 2;
    return `<circle cx="${shape.radius}" cy="${shape.radius}" r="${shape.radius}" fill="${shape.color.getHex()}" />`;
  } else if (shape instanceof Square) {
    // Logic to generate SVG for a square
    return `<rect x="0" y="0" width="${shape.side}" height="${shape.side}" fill="${shape.color.getHex()}" />`;
  } else {
    throw new Error('Unsupported shape type!');
  }
}

// Function call to initialize app
init();