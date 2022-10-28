// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "ProjectTitle"
}, {
    type: "input",
    message: "Provide a description of your project.",
    name: "Describe"
}, {
    type: "input",
    message: "How am I able to install this program?",
    name: "Install"
}, {
    type: "input",
    message: "How do you use this program?",
    name: "Usage"
}, {
    type: "input",
    message: "How can I contribute to this?",
    name: "Contribute"
}, {
    type: "input",
    message: "What are the test instructions?",
    name: "Instructions"
}, {
    type: "input",
    message: "What is your GitHub Username?",
    name: "GHU"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}, {
    type: "list",
    message: "What's the License used?",
    choices: ["MIT", "GNU GPL v3", "BSD 3", "Apache 2.0", "NA"],
    name: "License"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("Success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log(answers); // sanity check
            // insert the answers into a string that looks like markdown
            // pass the data to the func that does that for me
            // store the returning string in a variable to use later
            const generatedMarkdownAsString = generateMarkdown(answers);
            // write that md string to a md file using your wrapper function
            writeToFile("./utils/README.md", generatedMarkdownAsString);
        })
}

// Function call to initialize app
init();
