const Svg = require('./svg')
const fs = require('fs')
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Intials of logo (Max three Characters)?',
            name: 'logo',
        },
        {
            type: 'input',
            message: 'What font color for your Logos text?(ie. Hex or red,blue... lightgray)',
            name: 'logoColor',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Shape for background for logo',
            choices: ['rectangle', 'circle', 'triangle',],
        },
        {
            type: 'input',
            message: 'Color for Shape for logo',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        // console.log(response);
        const newLogo = new Svg(response.logo, response.logoColor, response.shape[0], response.shapeColor)
        fs.writeFileSync('test.svg', newLogo.template)
    }
    );
