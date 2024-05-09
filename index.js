
const inquierer = require("inquirer");
const colors = require("colors")
const {CreateLogo} = require("./lib/shapes")
const { Color } = require('./colorModule.js');

const inquirer = require("inquirer");

// Array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter three letters you want on your logo:",
    },

    {
      type: "input",
      name: "textColour",
      message: "Enter the text color:",
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
      message: "Enter the enter the shape color:",
    },

  ])
  .then((answers) => {
    const user = new Shape(answers.text, answers.textColour, answers.shapeType, answers.shapColour);
    user.drawShape();
  });

// Function to create svg file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error svg:", err);
    } else {
      console.log("svg file created successfully!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      const readme = generateMarkdown(response);
      writeToFile("logo.svg", img);
      generateHTMLFile("index.html", img);
    });
}

// Function call to initialize app
init();