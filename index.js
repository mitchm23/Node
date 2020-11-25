var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown')
fs = require('fs');

// array of questions for use
const questions = ["What is your project?", "What is your name?", "What is your github username?", "What is your mission statement?",

];







// fs.writeFile('test.txt', 'hello world', function (err){
//     if (err) return console.log(err);
//     console.log('Hello World > test.txt');
// })

// function to initialize program
const init = () => {
    inquirer.prompt([
        {
            type:"input",
            message:questions[0],
            name:"projectTitle",
        },
        {
            type:"input",
            message:questions[1],
            name:"name",
        },
        {
            type:"input",
            message:questions[2],
            name:"githubName",
        },
        {
            type:"input",
            message:questions[3],
            name:"missionStatement",
        },
    
        

    ])
    .then(function(data){
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data), function(err){
            if (err) return console.log(err);
            else console.log("Success!")
        });
    })

    
}

// function call to initialize program
init();

