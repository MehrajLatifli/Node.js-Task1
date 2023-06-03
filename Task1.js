const fs = require('fs/promises');
const path = require('path');
const os = require('os');
const nodeos = require('node:os');
const readline = require('readline');
const axios = require('axios');

async function createDirectory(path) {
    try {
        await fs.mkdir(path);
        console.log('\x1Bc');
        console.log(`Created directory ${path}`);
        displayMenu();
    } catch (error) {

        console.log('\x1Bc');
        console.error(`Got an error trying to create the directory: ${error.message} \n`);

        displayMenu();
    }


}

async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log('\x1Bc');
        console.log(`Wrote data to ${fileName}`);
        displayMenu();
        
    } catch (error) {
        console.log('\x1Bc');
        console.error(`Got an error trying to write the file: ${error.message}`);
        displayMenu();
    }

    console.log(path.parse(fileName))
}


async function moveFile(from, to) {
    try {
        await fs.rename(from, to);
        console.log('\x1Bc');
        console.log(`Moved ${from} to ${to}`);
        displayMenu();
    } catch (error) {
        console.log('\x1Bc');
        console.error(`Got an error trying to move the file: ${error.message}`);
        displayMenu();

    }
}






function Task1() {

    startMenu();

}







const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const menuOptions = [
    `1. createDirectory('Test')`,
    `2. writeToFile()`,
    `3. createDirectory('TestCopy')`,
    `4. moveFile(Test,TestCopy)`
];


function displayMenu() {

    console.log('Menu:');
    console.log(menuOptions.join('\n'));

    rl.question('Select an option: ', handleInput);
}



function handleInput(input) {

    console.log('\x1Bc');

    if (input === '1') {
        createDirectory('Test');
        console.clear
    } else if (input === '2') {
        for (let index = 1; index < 5; index++) {

            const fromPath = path.join(__dirname, "./Test", `data_${index}.txt`);

            writeToFile(fromPath, `data_${index}`)
        }

    } else if (input === '3') {
        createDirectory('TestCopy');
    } else if (input === '4') {
        for (let index = 1; index < 5; index++) {

            const fromPath = path.join(__dirname, "./Test", `data_${index}.txt`);
            const destPath = path.join(__dirname, "./TestCopy", `File_${index}.txt`);

            moveFile(fromPath, destPath);
        }
        return;
    } else {
        console.log('Invalid option');
    }


    displayMenu();
}

function startMenu() {

    console.log('\x1Bc');

    displayMenu();



}






const functionName = process.argv[2];

if (functionName === 'Task1') {

    Task1()    // node Task1.js Task1

}
else {
    console.log('Invalid function name');
}


