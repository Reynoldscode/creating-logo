const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes.js");
// const { Color } = require("./lib/color.js");
// const { Font } = require("./lib/font.js");
const SvgFile = require("./lib/SvgFile.js");

// Function to prompt user for input using Inquirer
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

// Function to initialize app
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error creating SVG:", err);
    } else {
      console.log("SVG file created successfully!");
    }
  });
}



// Function to initialize app
async function init() {
  let svgString = "";
  const answers = await inquirer.prompt(questions);
  let user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    user_text = answers.text;
  } else {
    console.log("you need only three characters");
    return;
  }
  console.log("User text: [" + user_text + "]");

  //user font color
  const userFontColor = answers.textColour;
  console.log(`User font color: ${userFontColor}`);

  //user shape color
  const userShapeColor = answers.shapeColour;
  console.log(`User shape color:${userShapeColor}`);

  //user shape type
  let user_shape;
  if (answers.shapeType === "Square" || answers.shapeType === "square") {
    user_shape = new Square(userShapeColor);
    user_shape.setColor(answers.shapeColour);

    console.log("User selected Square shape");
  } else if (answers.shapeType === "Circle" || answers.shapeType === "circle") {
    user_shape = new Circle(userShapeColor);
    user_shape.setColor(answers.shapeColour);

    console.log("User selected Circle shape");
  } else if (answers.shapeType === "Triangle" || answers.shapeType === "triangle") {
    user_shape = new Triangle(userShapeColor);
    user_shape.setColor(answers.shapeColour);

    console.log("User selected Triangle shape");
  } else {
    console.log("Invalid shape!");
  }
  let svg = new SvgFile();
  svg.setTextElement(user_text, userFontColor);
  svg.setShapeElement(user_shape);
  svgString = svg.render();
  writeToFile("logo.svg", svgString); // Specify the file name here
}

init();