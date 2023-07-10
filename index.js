//includes necessary packages for the project
const inquirer = require('inquirer');
const fs = require('fs');
//creates array of questions to be used by inquirer
const questions = ["What is the name of your project?","What does your program do?", "How do you install your program?", "How is your program allowed to be used?", "What license does your program have?", "Who contributed to the creation?", "How do you test your program?", "What is your email?","What is your GitHub username?"]; //put into message catagory for inquirer


const test = function(response) { //function that returns the code for the readme using the given object
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

//writes out the readme file and logs either an error or a success
function writeToFile(fileName, data) {
    fs.writeFile(fileName, test(data), (err) =>
            err ? console.log(error) : console.log('success'));
}

//calls inquirer and gathers responses in an object
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
    .then(response => { //writes out the readme file and logs when it finishes
        writeToFile("README.md",response)
        console.log('responses logged');
    })
}

// Function call to initialize app
init();
