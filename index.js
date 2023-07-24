// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents:',
        name: 'table-of-contents',
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Credits:',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'License:',
        choices: ['MIT', 'ISC', 'Apache license 2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Badges:',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'Features:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'How to Contribute:',
        name: 'how-to-contribute',
    },
    {
        type: 'input',
        message: 'Tests:',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        let makeReadMe = markdown(answers);
        writeToFile('README.md', makeReadMe);
    });
}

// Function call to initialize app
init();
