// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square, SVG} = require('./lib');

// Array of questions for user input
questions = [

    {
        type: "input",
        message: "Please enter your text, limit is three characters.",
        name: "text"
    },

    {
        type: "input",
        message: "Please your text color as a keyword or a hexadecimal number.",
        name: "colorText"
    },

    {
        type: "list",
        message: "Please select from the following shapes:",
        name: "shape",
        choices:['circle', 'triangle', 'square']
    },

    {
        type: "input",
        message: "Please your shape's color as a keyword or a hexadecimal number.",
        name: "colorShape"
    }
];
// Function to log error or success message
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error, data) {
        error ? console.error(error) : console.log("Generated logo.svg")
    })
}
// Function to generate new file
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("logo.svg", generateFile(answers));
    })
}
// Function to create new shape
function generateLogo() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        let shape;
        switch (answers.shape) {
            case "circle" :
                console.log("User selected circle.");
                shape = new Circle;
                break;
            case "triangle" :
                console.log("User selected triangle.");
                shape = new Triangle;
                break;
            case "square" :
                console.log("User selected square.");
                shape = new Square;
                break;
        }
        shape.settext(answers.text);
        shape.setcolorText(answers.colorText);
        shape.setcolorShape(answers.colorShape);

        const svg = new SVG;
        svg.setshape(shape.render());

        writeToFile("logo.svg", svg.render());
    })
}

generateLogo();