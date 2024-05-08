

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your application repository?",
    name: "title"
  },
  {
    type: "input",
    message: "Write a brief description about your application?",
    name: "description"
  },
  {
    type: "input",
    message: "Write down the installation process.",
    name: "installation"
  },
  {
    type: "input",
    message: "How will your application be used?",
    name: "usage"
  },
  {
    type: "input",
    message: "What contribution did you make in the application process?",
    name: "contribution"
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test"
  },
  {
    type: "input",
    message: "Type in your github link.",
    name: "Github-Account"
  },
  {
    type: "input",
    message: "Type in your Email.",
    name: "Email"
  },
  {
    type: "list",
    message: "Select the license you used for the application repository?",
    name: "license",
    choices: [
      "GNU general Public License v3.0",
      "Apache License 2.0",
      "MIT License",
      "BSD 2-Clause 'Simplified License'",
      "BSD 3-Clause 'New'or 'revised' license",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0"
    ]
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error writing README file:", err);
    } else {
      console.log("README file created successfully!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      const readme = generateMarkdown(response);
      writeToFile("README.md", readme);
      generateHTMLFile("index.html", readme);
    });
}

// Function to generate HTML file with README content
function generateHTMLFile(fileName, readmeContent) {
  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error("Error writing HTML file:", err);
    } else {
      console.log("HTML file created successfully!");
    }
  });
}

// Function call to initialize app
init();