const Svg = require('./svg')
const fs = require('fs')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])
    .then((response) => {
        const newLogo = new Svg('test', 'red', 'circle', 'blue')
        fs.writeFileSync('test.svg', newLogo.template)
    }
    );
