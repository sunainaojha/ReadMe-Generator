// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README generator! To start, please provide your full name:',

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:',

    },
    {
        type: 'confirm',
        name: 'video',
        message: 'Would you like to see the demonstration video?',
        
    },

{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',

},

    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'APACHE 2.0'],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// Function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        // make a readme file and add to dist folder
        fs.writeFile('SAMPLE-README.md', data, err => {
            // if there's an error, reject the Promise and send the error to .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: console.log('README.md Generated.')
            });

        })
    })
}

// Initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeInfo => {
        return writeToFile(readmeInfo);
    })
    .catch(err => {
        console.log(err);
    })


