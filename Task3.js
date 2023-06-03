const fs = require('fs/promises');
const path = require('path');
const os = require('os');
const nodeos = require('node:os');
const readline = require('readline');
const axios = require('axios');




async function getapi(url) {
    try {

        const response = await axios.get(url);

        console.log(response.data.url);
        console.log(response.data.explanation);

        return response.data;

    } catch (error) {

        console.log(error);

        throw error;
    }
}



async function writeToFile(fileName, data) {
    try {
        
        await fs.writeFile(fileName, data);

        console.log(`Wrote data to ${fileName}`);


    } catch (error) {

        console.error(`Got an error trying to write the file: ${error.message}`);

    }

    console.log(path.parse(fileName))
}




async function Task3() {


    try {
        const jsonData = await getapi("https://jsonplaceholder.typicode.com/todos");
        await writeToFile('data.json', JSON.stringify(jsonData));
    } catch (error) {
        console.error(error);
    }

}




const functionName = process.argv[2];

if (functionName === 'Task3') {

    Task3()  // node Task3.js Task3

}
else {
    console.log('Invalid function name');
}