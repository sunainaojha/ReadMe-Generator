// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
},

{
    type: "input",
    name: "github username",
    message: "Whats your Github Username?"
},
{
    type: "input",
    name: "description",
    message: "Give a short summary of this project."
},
{
    type: 'list',
    message: 'What license does your project need?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},

{
    type: "input",
    name: "contacts",
    message: "How can you contact the user?"
},
{
    type: "input",
    name:"install",
    message: "What command should be run to install dependencies?"
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run tests??"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) console.log(err)
        console.log("README.md generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
