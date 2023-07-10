// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is the name of your project?","What does your program do?", "How do you install your program?", "How is your program allowed to be used?", "What license does your program have?", "Who contributed to the creation?", "How do you test your program?", "What is your email?","What is your GitHub username?"]; //put into message catagory for inquirer


const test = function(response) {
    return `# ${response.title}

## Table of contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributors}

## Tests

${response.tests}

## Questions

${response.username}
${response.email}`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, test(data), (err) =>
            err ? console.log(error) : console.log('success'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: questions[4],
            choices: ["MIT", "GPLv3", "Apache", "BSD 3-clause", "Unlincense", "BSD 2-clause", "LGPLv3", "AGPLv3", "Other"],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contributors',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'username',
        },
        { 
            type: 'input',
            message: questions[8],
            name: 'email',
        }
    ])
    .then(response => {
        writeToFile("README.md",response)
        console.log('responses logged');
    })
}

// Function call to initialize app
init();
